"use client";

import useFocusTimer from "@/hooks/useFocusTimer";
import { getAnimationVariants } from "@/lib/utils";
import { Variants } from "framer-motion";
import { ClockIcon, History } from "lucide-react";
import React from "react";
import { TypographyH1 } from "../Typography";
import Header from "../common/Header";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { AnimatedSection } from "../ui/section";
import SoundPlayer from "./SoundPlayer";

const animation = getAnimationVariants("fadeInFromBottom");

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FocusTimer = () => {
  const [focusTime, setFocusTime] = React.useState<number | null>(null);

  const handleFocusTimeChange = (newFocusTime: number) => {
    setFocusTime(newFocusTime);
  };

  return (
    <div className="min-h-[50vh]">
      <AnimatedSection
        className="mt-0"
        variants={animation}
        initial="hidden"
        animate="visible"
      >
        <Header variants={childVariants}></Header>
        <h1 className="sr-only">focus timer</h1>
        {!focusTime && <SelectFocusTime onChange={handleFocusTimeChange} />}
        {focusTime && <TimerSection focusTimeInMinutes={focusTime} />}
      </AnimatedSection>
    </div>
  );
};

const SelectFocusTime: React.FC<{
  onChange: (arg: number) => void;
}> = ({ onChange }) => {
  return (
    <AnimatedSection
      className="mt-0"
      variants={animation}
      initial="hidden"
      animate="visible"
    >
      <AnimatedSection variants={childVariants}>
        <TypographyH1>How long would you like to focus for?</TypographyH1>
      </AnimatedSection>
      <AnimatedSection className="flex-row gap-x-4">
        <Button className="flex-1 text-xl" onClick={() => onChange(30)}>
          30 mins
        </Button>
        <Button className="flex-1 text-xl" onClick={() => onChange(60)}>
          60 mins
        </Button>
        <Button className="flex-1 text-xl" onClick={() => onChange(90)}>
          90 mins
        </Button>
      </AnimatedSection>
    </AnimatedSection>
  );
};

const TimerSection: React.FC<{ focusTimeInMinutes: number }> = ({
  focusTimeInMinutes,
}) => {
  const { seconds, isActive, toggle, reset } =
    useFocusTimer(focusTimeInMinutes);

  const minutes = Math.floor(seconds / 60);
  const remSeconds = seconds % 60;

  const totalSeconds = focusTimeInMinutes * 60;
  const elapsedSeconds = totalSeconds - seconds;
  const progress = (elapsedSeconds / totalSeconds) * 100;
  return (
    <AnimatedSection variants={childVariants} className="mt-6">
      <AnimatedSection className="mt-4">
        <TypographyH1>Time to getir done, huh?</TypographyH1>
      </AnimatedSection>
      <AnimatedSection className="text-center mt-4">
        <label className="mb-4">
          <span className="text-6xl">{String(minutes).padStart(2, "0")}</span>
          <span className="text-2xl">
            :{String(remSeconds).padStart(2, "0")}
          </span>
        </label>
      </AnimatedSection>
      <Progress value={progress} />
      <AnimatedSection className="flex flex-row  justify-center gap-x-6 mt-6">
        <Button onClick={toggle} className="text-xl">
          <ClockIcon className="mr-2 h-4 w-4" />
          {isActive ? "Pause" : "Start"}
        </Button>
        <Button onClick={reset} className="text-xl">
          <History className="mr-2 h-4 w-4" /> Reset
        </Button>
        <SoundPlayer
          play={isActive}
          sound="https://www.soundjay.com/nature/sounds/rain-02.mp3"
          loop
        />
      </AnimatedSection>
    </AnimatedSection>
  );
};

export default FocusTimer;
