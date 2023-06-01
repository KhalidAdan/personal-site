// TBD ISSUES:
// Safari :(

export default function AnimatedTurbulence() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      opacity="0.45"
      className="h-0 motion-reduce:hidden pointer-events-none"
    >
      <defs>
        <filter id="space-filter">
          <feTurbulence
            type="fractalNoise"
            stitchTiles="stitch"
            result="turbulence"
            baseFrequency={0.3}
            numOctaves={1}
            seed={0}
          >
            <animate
              attributeName="baseFrequency"
              dur="60s"
              values="0.3;0.65"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feSpecularLighting
            surfaceScale="15"
            specularConstant="0.6"
            specularExponent="20"
            in="turbulence"
            result="specularLighting"
          >
            <feDistantLight azimuth="3" elevation="75"></feDistantLight>
          </feSpecularLighting>
        </filter>
      </defs>
    </svg>
  );
}
