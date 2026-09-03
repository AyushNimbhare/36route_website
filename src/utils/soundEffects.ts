/**
 * Futuristic Digital Sound Synthesis Engine for 36Route
 * Generates custom, premium synthesized sound effects using the Web Audio API
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private isUnlocked: boolean = false;

  constructor() {
    this.initAutoUnlock();
  }

  /**
   * Browser autoplay policy requires user interaction before audio plays.
   * Auto-unlocks AudioContext on the first interaction anywhere on page.
   */
  private initAutoUnlock() {
    if (typeof window === 'undefined') return;

    const unlock = () => {
      this.getContext();
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().then(() => {
          this.isUnlocked = true;
        });
      } else if (this.ctx && this.ctx.state === 'running') {
        this.isUnlocked = true;
      }
      window.removeEventListener('click', unlock);
      window.removeEventListener('keydown', unlock);
      window.removeEventListener('touchstart', unlock);
      window.removeEventListener('pointerdown', unlock);
    };

    window.addEventListener('click', unlock, { passive: true });
    window.addEventListener('keydown', unlock, { passive: true });
    window.addEventListener('touchstart', unlock, { passive: true });
    window.addEventListener('pointerdown', unlock, { passive: true });
  }

  public getContext(): AudioContext | null {
    if (this.isMuted) return null;
    try {
      if (!this.ctx || this.ctx.state === 'closed') {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      return this.ctx;
    } catch {
      return null;
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (!muted) {
      this.getContext();
    }
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  /**
   * Subtle, continuous futuristic electronic second tick.
   * Plays every second during active countdown.
   * Elegant, crisp, non-fatiguing high-tech chronometer pulse.
   */
  public playRegularSecondTick(second: number = 0) {
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      // Alternate frequencies between even and odd seconds for a dynamic, sleek rhythmic feel
      const freq = (second % 2 === 0) ? 1046.50 : 1174.66; // C6 / D6 subtle high-tech blip

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Ultra-clean 25ms micro-envelope
      const volume = 0.04; // Gentle volume for continuous pleasant ticking
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(volume, now + 0.002);
      gain.gain.exponentialRampToValueAtTime(0.00001, now + 0.028);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.03);

      // Add a subtle high-frequency digital ping (sparkle transient)
      const pingOsc = ctx.createOscillator();
      const pingGain = ctx.createGain();
      pingOsc.type = 'triangle';
      pingOsc.frequency.setValueAtTime(freq * 2, now);
      pingGain.gain.setValueAtTime(0.015, now);
      pingGain.gain.exponentialRampToValueAtTime(0.00001, now + 0.018);

      pingOsc.connect(pingGain);
      pingGain.connect(ctx.destination);

      pingOsc.start(now);
      pingOsc.stop(now + 0.02);
    } catch {
      // Ignore audio policy or autoplay constraints
    }
  }

  /**
   * Intense electronic digital tick/beep for the final 10 countdown seconds.
   * Escalates in frequency, sub-bass, and energy as secondsRemaining approaches 0.
   */
  public playCountdownTick(secondsRemaining: number = 10) {
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const progress = Math.max(0, Math.min(1, (10 - secondsRemaining) / 10)); // 0.0 to 1.0

      // Frequency rises from 800Hz to ~1600Hz
      const baseFreq = 800 + progress * 800;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq, now);

      // Fast exponential envelope for crisp digital click
      const volume = 0.07 + progress * 0.08;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(volume, now + 0.003);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);

      // For the final 3 seconds, add a resonant secondary harmonic & subtle sub kick
      if (secondsRemaining <= 3) {
        const subOsc = ctx.createOscillator();
        const subGain = ctx.createGain();
        subOsc.type = 'sine';
        subOsc.frequency.setValueAtTime(160, now);
        subGain.gain.setValueAtTime(0.12, now);
        subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

        subOsc.connect(subGain);
        subGain.connect(ctx.destination);

        subOsc.start(now);
        subOsc.stop(now + 0.09);
      }
    } catch {
      // Ignore audio policy or autoplay constraints
    }
  }

  /**
   * Smooth cinematic whoosh followed by a clean uplifting electronic chime
   * when the countdown hits zero or the curtain unveils.
   */
  public playLaunchWhooshAndChime() {
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;

      // 1. Cinematic Filtered Noise Whoosh (0.0s to 1.4s)
      const bufferSize = ctx.sampleRate * 1.4;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(200, now);
      filter.frequency.exponentialRampToValueAtTime(2800, now + 0.6);
      filter.frequency.exponentialRampToValueAtTime(300, now + 1.3);
      filter.Q.setValueAtTime(3.0, now);

      const whooshGain = ctx.createGain();
      whooshGain.gain.setValueAtTime(0.001, now);
      whooshGain.gain.exponentialRampToValueAtTime(0.25, now + 0.5);
      whooshGain.gain.exponentialRampToValueAtTime(0.001, now + 1.35);

      whiteNoise.connect(filter);
      filter.connect(whooshGain);
      whooshGain.connect(ctx.destination);

      whiteNoise.start(now);
      whiteNoise.stop(now + 1.4);

      // Sub whoosh sweep
      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(80, now);
      subOsc.frequency.exponentialRampToValueAtTime(240, now + 0.5);
      subOsc.frequency.exponentialRampToValueAtTime(50, now + 1.2);
      subGain.gain.setValueAtTime(0.001, now);
      subGain.gain.linearRampToValueAtTime(0.22, now + 0.45);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      subOsc.connect(subGain);
      subGain.connect(ctx.destination);
      subOsc.start(now);
      subOsc.stop(now + 1.25);

      // 2. Uplifting Crystalline Electronic Chime (Starts at +0.55s)
      const chimeStart = now + 0.55;
      // D Major 9th crystalline frequencies (D4, A4, F#5, C#6, E6, A6)
      const chord = [293.66, 440.00, 587.33, 739.99, 1108.73, 1318.51, 1760.00];

      chord.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();
        const noteTime = chimeStart + idx * 0.04;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, noteTime);

        // Bell-like shimmer decay
        noteGain.gain.setValueAtTime(0.001, noteTime);
        noteGain.gain.linearRampToValueAtTime(0.09 / (1 + idx * 0.15), noteTime + 0.02);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 2.4 - idx * 0.1);

        osc.connect(noteGain);
        noteGain.connect(ctx.destination);

        osc.start(noteTime);
        osc.stop(noteTime + 2.5);
      });
    } catch {
      // Ignore errors
    }
  }

  /**
   * Feedback sound played when unmuting the audio button
   */
  public playPreviewSound() {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1320, now + 0.12);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.26);
    } catch {
      // Ignore
    }
  }
}

export const soundEngine = new SoundEngine();
