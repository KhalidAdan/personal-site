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

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }
    const text = element.innerText;

    let iteration = 0;

    clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      setIsAnimating(true);
      element.innerText = element.innerText
        .split("")
        .map((_, index) => {
          if (index < iteration) {
            return text[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
        setIsAnimating(false);
      }

      iteration += 1 / (options?.totalIterations ?? 3);
    }, 40);

    return () => {
      clearInterval(intervalRef.current);
      setIsAnimating(false);
    };
  }, [options?.totalIterations]);

  return [elementRef, isAnimating];
};

export default useAnimatedText;
