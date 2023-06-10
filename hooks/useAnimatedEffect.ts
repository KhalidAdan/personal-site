import { useEffect, useRef, useState } from "react";

interface UseAnimatedTextOptions {
  totalIterations: number;
}

const useAnimatedText = (
  options: UseAnimatedTextOptions
): [React.RefObject<HTMLHeadingElement>, boolean] => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const intervalRef = useRef<number | undefined>(undefined);
  const elementRef = useRef<HTMLHeadingElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalIterations = options?.totalIterations ?? 3;

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }
    const text = element.innerText;
    const textLength = text.length;
    let iteration = 0;

    clearInterval(intervalRef.current);

    const animate = () => {
      setIsAnimating(true);
      let newText =
        text.substring(0, iteration) + getRandomLetters(textLength - iteration);
      element.innerText = newText;

      if (iteration >= textLength) {
        stopAnimation();
      }

      iteration += 1 / totalIterations;
    };

    const getRandomLetters = (num: number) => {
      let result = "";
      for (let i = 0; i < num; i++) {
        result += letters[Math.floor(Math.random() * 26)];
      }
      return result;
    };

    const stopAnimation = () => {
      clearInterval(intervalRef.current);
      setIsAnimating(false);
    };

    intervalRef.current = window.setInterval(animate, 40);

    return stopAnimation;
  }, [totalIterations]);

  return [elementRef, isAnimating];
};

export default useAnimatedText;
