"use client";

import { motion } from "framer-motion";

export default function AnimatedTurbulence() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      opacity="0.4"
      className="absolute top-0 left-0 z-[-1]"
    >
      <defs>
        <filter
          id="nnnoise-filter"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="linearRGB"
        >
          <motion.feTurbulence
            type="fractalNoise"
            stitchTiles="stitch"
            result="turbulence"
            initial={{ baseFrequency: 0.1, numOctaves: 1, seed: 1 }}
            animate={{ baseFrequency: 0.65, numOctaves: 4, seed: 15 }}
            transition={{
              type: "tween",
              mass: 0.5,
              duration: 100,
              repeat: Infinity,
            }}
          ></motion.feTurbulence>
          <feSpecularLighting
            surfaceScale="15"
            specularConstant="0.6"
            specularExponent="20"
            lightingColor="#d3d0d6"
            in="turbulence"
            result="specularLighting"
          >
            <feDistantLight azimuth="3" elevation="75"></feDistantLight>
          </feSpecularLighting>
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="transparent"></rect>
      <rect width="100%" height="100%" filter="url(#nnnoise-filter)"></rect>
    </svg>
  );
}
