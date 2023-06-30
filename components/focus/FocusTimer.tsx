"use client";

import useFocusTimer from "@/hooks/useFocusTimer";
import { getAnimationVariants } from "@/lib/utils";
import { Variants } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
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
  const [selectedFocusTime, setSelectedFocusTime] = React.useState<
    number | null
  >(null);

  return (
    <div className="min-h-[50vh]">
      <AnimatedSection
        className="mt-0"
        variants={animation}
        initial="hidden"
        animate="visible"
      >
        <Link
          href="/blog"
          className="flex gap-x-1 text-muted-foreground uppercase text-sm mb-6 items-center"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
        <Header variants={childVariants}></Header>
        <h1 className="sr-only">focus timer</h1>
        <SelectFocusTime />
      </AnimatedSection>
    </div>
  );
};

const SelectFocusTime = () => {
  return (
    <>
      <AnimatedSection
        className="mt-0"
        variants={animation}
        initial="hidden"
        animate="visible"
      >
        <AnimatedSection variants={childVariants} className="mt-10">
          <TypographyH1>How long would you like to focus for?</TypographyH1>
        </AnimatedSection>
        <AnimatedSection className="flex-row gap-x-4">
          <Button className="flex-1 text-xl">30 mins</Button>
          <Button className="flex-1 text-xl">60 mins</Button>
          <Button className="flex-1 text-xl">90 mins</Button>
        </AnimatedSection>
      </AnimatedSection>
    </>
  );
};

const TimerSection = () => {
  let initialMinutes = 25;
  const { seconds, isActive, toggle, reset } = useFocusTimer(initialMinutes);

  const minutes = Math.floor(seconds / 60);
  const remSeconds = seconds % 60;

  const totalSeconds = initialMinutes * 60;
  const elapsedSeconds = totalSeconds - seconds;
  const progress = (elapsedSeconds / totalSeconds) * 100;
  return (
    <>
      <AnimatedSection variants={childVariants} className="mt-10">
        <TypographyH1>Time to getir done, huh?</TypographyH1>
      </AnimatedSection>
      <AnimatedSection className="text-center">
        <label className="mb-4">
          <span className="text-6xl">{String(minutes).padStart(2, "0")}</span>
          <span className="text-2xl">
            :{String(remSeconds).padStart(2, "0")}
          </span>
        </label>
      </AnimatedSection>
      <Progress value={progress} />
      <AnimatedSection className="flex flex-row  justify-center gap-x-4 mt-4">
        <Button onClick={toggle}>{isActive ? "Pause" : "Start"}</Button>
        <Button className="button" onClick={reset}>
          Reset
        </Button>
        <SoundPlayer
          play={isActive}
          sound="https://www.soundjay.com/nature/sounds/rain-02.mp3"
          loop
        />
      </AnimatedSection>
    </>
  );
};

export default FocusTimer;
