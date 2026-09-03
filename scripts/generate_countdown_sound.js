// Script to generate a 16-bit 44.1kHz Stereo WAV file for the Futuristic Digital Countdown & Launch Unveil
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sampleRate = 44100;
const numChannels = 2;
const bytesPerSample = 2; // 16-bit

// 10 seconds of countdown ticks (1 tick per second: t = 0 to 9)
// at t = 10.0s: whoosh starts (10.0 to 11.2s)
// at t = 10.8s: uplifting electronic chime chord triggers and decays (until 14.5s)
const totalDuration = 15.0; // 15 seconds
const totalSamples = Math.floor(sampleRate * totalDuration);

const leftBuffer = new Float32Array(totalSamples);
const rightBuffer = new Float32Array(totalSamples);

// Helper: Add sine wave with ADSR envelope
function addTone(freq, startSec, duration, gain = 0.3, pan = 0, type = 'sine', decayPower = 3) {
  const startSample = Math.floor(startSec * sampleRate);
  const endSample = Math.min(totalSamples, startSample + Math.floor(duration * sampleRate));
  
  for (let i = startSample; i < endSample; i++) {
    const t = (i - startSample) / sampleRate;
    const progress = t / duration;
    
    // Quick attack (2ms), exponential decay
    let env = 0;
    const attackTime = 0.003;
    if (t < attackTime) {
      env = t / attackTime;
    } else {
      env = Math.pow(1 - progress, decayPower);
    }
    
    let sample = 0;
    if (type === 'sine') {
      sample = Math.sin(2 * Math.PI * freq * t);
    } else if (type === 'triangle') {
      sample = (2 / Math.PI) * Math.asin(Math.sin(2 * Math.PI * freq * t));
    }
    
    const val = sample * env * gain;
    const leftGain = Math.cos((pan + 1) * Math.PI / 4);
    const rightGain = Math.sin((pan + 1) * Math.PI / 4);
    
    leftBuffer[i] += val * leftGain;
    rightBuffer[i] += val * rightGain;
  }
}

// 1. Final 10 Seconds: Subtle Electronic Ticks / Beeps (from t=0.0s to t=9.0s)
for (let sec = 0; sec < 10; sec++) {
  const secondsLeft = 10 - sec;
  const time = sec * 1.0;
  
  // Base frequency increases as anticipation builds
  // Starts at 880Hz (A5), climbs to 1760Hz (A6)
  const baseFreq = 800 + (10 - secondsLeft) * 95;
  const harmonicFreq = baseFreq * 2.0;
  
  const intensity = 0.15 + (sec / 9) * 0.15; // 0.15 to 0.30
  
  // Crisp digital click/blip
  addTone(baseFreq, time, 0.045, intensity, -0.2 + (sec % 3) * 0.2, 'sine', 2.5);
  addTone(harmonicFreq, time, 0.03, intensity * 0.5, 0.2 - (sec % 3) * 0.2, 'sine', 3);
  
  // Sub-bass transient kick for the final 3 seconds
  if (secondsLeft <= 3) {
    addTone(180, time, 0.06, 0.25, 0, 'sine', 4);
    // Double pulse beep for intense anticipation
    addTone(baseFreq * 1.25, time + 0.12, 0.04, intensity * 0.8, 0.3, 'sine', 3);
  }
}

// 2. Cinematic Whoosh (t = 9.8s to 11.5s)
const whooshStart = 9.8;
const whooshDuration = 1.7;
const whooshSamples = Math.floor(whooshDuration * sampleRate);
const whooshStartSample = Math.floor(whooshStart * sampleRate);

// Filtered noise sweep
let filterPrevL = 0;
let filterPrevR = 0;

for (let i = 0; i < whooshSamples; i++) {
  const globalIdx = whooshStartSample + i;
  if (globalIdx >= totalSamples) break;
  
  const t = i / sampleRate;
  const progress = t / whooshDuration;
  
  // Whoosh envelope: swells up to t = 0.6s (around t=10.4s), then smooth tail
  let whooshEnv = 0;
  if (progress < 0.35) {
    whooshEnv = Math.pow(progress / 0.35, 2.5);
  } else {
    whooshEnv = Math.pow(1 - (progress - 0.35) / 0.65, 2);
  }
  
  // White noise
  const noiseL = (Math.random() * 2 - 1);
  const noiseR = (Math.random() * 2 - 1);
  
  // Dynamic filter cutoff sweeping upwards and then opening
  const cutoff = 0.05 + Math.sin(progress * Math.PI) * 0.45;
  filterPrevL = filterPrevL + cutoff * (noiseL - filterPrevL);
  filterPrevR = filterPrevR + cutoff * (noiseR - filterPrevR);
  
  // Add resonant sub-bass sweep (80Hz rising to 320Hz and dipping)
  const subFreq = 70 + Math.sin(progress * Math.PI * 0.8) * 180;
  const subSine = Math.sin(2 * Math.PI * subFreq * t) * whooshEnv * 0.35;
  
  const pan = Math.sin(progress * Math.PI * 2) * 0.5;
  const leftGain = Math.cos((pan + 1) * Math.PI / 4);
  const rightGain = Math.sin((pan + 1) * Math.PI / 4);
  
  leftBuffer[globalIdx] += (filterPrevL * whooshEnv * 0.28 + subSine) * leftGain;
  rightBuffer[globalIdx] += (filterPrevR * whooshEnv * 0.28 + subSine) * rightGain;
}

// 3. Clean Uplifting Electronic Chime (Zero Mark - t = 10.5s onwards)
// Modern uplifting chord stack: D Major 9th (D4, A4, F#5, C#6, E6, A6)
const chimeStart = 10.45;
const chimeNotes = [
  { freq: 293.66, dur: 3.5, gain: 0.25, pan: 0, delay: 0.0 },       // D4
  { freq: 440.00, dur: 3.2, gain: 0.22, pan: -0.3, delay: 0.03 },    // A4
  { freq: 587.33, dur: 3.8, gain: 0.28, pan: 0.2, delay: 0.06 },     // D5
  { freq: 739.99, dur: 3.5, gain: 0.24, pan: -0.4, delay: 0.09 },    // F#5
  { freq: 1108.73, dur: 4.0, gain: 0.22, pan: 0.4, delay: 0.12 },   // C#6
  { freq: 1318.51, dur: 4.2, gain: 0.18, pan: -0.2, delay: 0.15 },   // E6
  { freq: 1760.00, dur: 4.5, gain: 0.15, pan: 0.3, delay: 0.18 },   // A6
  { freq: 2217.46, dur: 3.8, gain: 0.10, pan: 0.0, delay: 0.21 },   // C#7 shimmer
];

chimeNotes.forEach(note => {
  addTone(note.freq, chimeStart + note.delay, note.dur, note.gain, note.pan, 'sine', 1.8);
  // Harmonic overtone for crystal brilliance
  addTone(note.freq * 2, chimeStart + note.delay, note.dur * 0.6, note.gain * 0.3, -note.pan, 'sine', 2.8);
});

// Soft Sub-bass impact on chime hit
addTone(55, chimeStart, 1.2, 0.35, 0, 'sine', 2.5);

// Soft sparkling octave chime sparkles
const sparkles = [1480, 1760, 2217, 2637, 2960];
sparkles.forEach((freq, idx) => {
  addTone(freq, chimeStart + 0.3 + idx * 0.09, 1.2, 0.08, (idx % 2 === 0 ? 0.5 : -0.5), 'sine', 3);
});

// Master normalization and soft-limiting to prevent clipping
let maxPeak = 0;
for (let i = 0; i < totalSamples; i++) {
  if (Math.abs(leftBuffer[i]) > maxPeak) maxPeak = Math.abs(leftBuffer[i]);
  if (Math.abs(rightBuffer[i]) > maxPeak) maxPeak = Math.abs(rightBuffer[i]);
}

const targetPeak = 0.88;
const scale = maxPeak > 0 ? (targetPeak / Math.max(maxPeak, targetPeak)) : 1.0;

// WAV file header builder
function createWavHeader(numSamples) {
  const byteRate = sampleRate * numChannels * bytesPerSample;
  const blockAlign = numChannels * bytesPerSample;
  const dataSize = numSamples * numChannels * bytesPerSample;
  const buffer = Buffer.alloc(44);

  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write('WAVE', 8);
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16); // PCM Chunk size
  buffer.writeUInt16LE(1, 20);  // Format = 1 (PCM)
  buffer.writeUInt16LE(numChannels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(byteRate, 28);
  buffer.writeUInt16LE(blockAlign, 32);
  buffer.writeUInt16LE(16, 34); // Bits per sample
  buffer.write('data', 36);
  buffer.writeUInt32LE(dataSize, 40);

  return buffer;
}

// Convert Float32 samples to 16-bit PCM buffer
const header = createWavHeader(totalSamples);
const pcmBuffer = Buffer.alloc(totalSamples * numChannels * bytesPerSample);

for (let i = 0; i < totalSamples; i++) {
  const leftSample = Math.max(-1, Math.min(1, leftBuffer[i] * scale));
  const rightSample = Math.max(-1, Math.min(1, rightBuffer[i] * scale));
  
  const leftInt = leftSample < 0 ? leftSample * 0x8000 : leftSample * 0x7FFF;
  const rightInt = rightSample < 0 ? rightSample * 0x8000 : rightSample * 0x7FFF;
  
  pcmBuffer.writeInt16LE(Math.floor(leftInt), i * 4);
  pcmBuffer.writeInt16LE(Math.floor(rightInt), i * 4 + 2);
}

const soundsDir = path.resolve(__dirname, '../public/sounds');
if (!fs.existsSync(soundsDir)) {
  fs.mkdirSync(soundsDir, { recursive: true });
}

const wavPath = path.join(soundsDir, 'countdown_launch.wav');
fs.writeFileSync(wavPath, Buffer.concat([header, pcmBuffer]));
console.log(`Generated WAV sound effect at: ${wavPath} (${(fs.statSync(wavPath).size / 1024).toFixed(1)} KB)`);
