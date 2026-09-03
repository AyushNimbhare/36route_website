import React, { useEffect, useState } from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  alt?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'lg',
  alt = '36Route Official Brand Logo',
}) => {
  const [transparentDataUrl, setTransparentDataUrl] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = '/36route-logo.png';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const w = img.naturalWidth || img.width;
      const h = img.naturalHeight || img.height;
      canvas.width = w;
      canvas.height = h;

      ctx.drawImage(img, 0, 0);

      try {
        const imgData = ctx.getImageData(0, 0, w, h);
        const data = imgData.data;

        let minX = w, minY = h, maxX = 0, maxY = 0;
        let hasVisiblePixels = false;

        // Strip white background & measure tight bounding box
        for (let y = 0; y < h; y++) {
          for (let x = 0; x < w; x++) {
            const i = (y * w + x) * 4;
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            if (r > 232 && g > 232 && b > 232) {
              const brightness = (r + g + b) / 3;
              if (brightness >= 248) {
                data[i + 3] = 0; // Transparent
              } else {
                data[i + 3] = Math.max(0, Math.min(255, Math.round((255 - brightness) * 16)));
              }
            }

            if (data[i + 3] > 10) {
              hasVisiblePixels = true;
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
        }

        ctx.putImageData(imgData, 0, 0);

        // Crop to tight bounding box if valid
        if (hasVisiblePixels && minX < maxX && minY < maxY) {
          const cropW = maxX - minX + 1;
          const cropH = maxY - minY + 1;
          const croppedCanvas = document.createElement('canvas');
          croppedCanvas.width = cropW;
          croppedCanvas.height = cropH;
          const cropCtx = croppedCanvas.getContext('2d');
          if (cropCtx) {
            cropCtx.drawImage(canvas, minX, minY, cropW, cropH, 0, 0, cropW, cropH);
            setTransparentDataUrl(croppedCanvas.toDataURL('image/png'));
            return;
          }
        }

        setTransparentDataUrl(canvas.toDataURL('image/png'));
      } catch (e) {
        console.error('Error cropping logo cutout:', e);
      }
    };
  }, []);

  const sizeClasses = {
    sm: 'h-8 sm:h-10',
    md: 'h-11 sm:h-16',
    lg: 'h-18 sm:h-24',
    xl: 'h-24 sm:h-36 lg:h-40',
  }[size];

  return (
    <div className={`flex justify-center items-center select-none ${className}`}>
      {transparentDataUrl ? (
        <img
          src={transparentDataUrl}
          alt={alt}
          className={`${sizeClasses} w-auto object-contain transition-transform duration-300 hover:scale-[1.01]`}
        />
      ) : (
        <img
          src="/36route-logo.png"
          alt={alt}
          className={`${sizeClasses} w-auto object-contain opacity-0`}
        />
      )}
    </div>
  );
};
