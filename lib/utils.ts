import { clsx, type ClassValue } from "clsx";
import { Variants } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomValueFromArray<T extends any>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

type Animations = "fadeInFromBottom" | "slideInFromLeft";

type AnimationVariants = Record<Animations, Variants>;

export function getAnimationVariants(name: keyof AnimationVariants): Variants {
  return animationVariants[name];
}

const fadeInYAxis: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.2,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const slideInXAxis: Variants = {
  hidden: {
    opacity: 0,
    x: -2000,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
};

const animationVariants: AnimationVariants = {
  fadeInFromBottom: fadeInYAxis,
  slideInFromLeft: slideInXAxis,
};
