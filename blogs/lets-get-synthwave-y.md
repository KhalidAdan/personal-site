---
title: "Let's get synthwave-y"
description: "Were the 80's really the best decade? I don't know for sure, but I do know that the music was pretty good."
image: /synthwave-baby.avif
date: 2023-06-14T04:00:00.000Z
tags:
  - 4FUN
  - CSS
---

Picture this: neon hues in a gradient dance, and letters that look like they're straight from the 80s, morphing before your very eyes like a synthwave dream. That's right, we're getting synthwave-y and adding some dynamism to our text with a dash of React Hooks magic.

Today we'll walk through a custom React Hook, useAnimatedText, which adds an animated effect to our text.

Ready? Get in the mood with some synthwave tunes:

#### _[Synthwave Tunes](https://www.youtube.com/embed/D1zR9DkYgu4)_

### Retrofuturistic Text with `useAnimatedText`

The provided source code is a custom React Hook, `useAnimatedText`, that does all the heavy lifting. This Hook, when attached to a text-bearing HTML element, animates the text by progressively swapping the characters with random ones, eventually revealing the original content.

Here are the React Hooks featured in our `useAnimatedText`:

`useRef`: Stores references to our HTML heading element and the `setInterval` ID.
`useState`: Keeps track of the animation status.
`useEffect`: Manages the lifecycle of the text animation.

### Turn up the Synth with `useEffect`

`useEffect` orchestrates the neon dance of our text animation. Every time the `totalIterations` option changes, it clears out the old animation (if any) and sets up a new one. Every 40 milliseconds, it updates the text in the heading element to create a dynamic animation effect.

### Crank up the Volume with `useAnimatedText`

You want to control how fast your text goes from random letters to the final form? You got it! `useAnimatedText` takes an options object with a `totalIterations` property. More iterations = slower animation, giving you all the control you need to hit the sweet spot.

### Time to Rock'n'Roll

Just import the `useAnimatedText` hook, call it with your desired options, and attach the returned ref to the heading element you want to animate:

```js
import useAnimatedText from "./useAnimatedText";

const MyComponent = () => {
  const [animatedTextRef, isAnimating] = useAnimatedText({
    totalIterations: 10,
  });

  return <h1 ref={animatedTextRef}>Hello, world!</h1>;
};
```

That's all it takes to give your text the synthwave twist it deserves. Now, go forth and make the web a more dynamic, vibrant, and exciting place!

Here's a gif of the final result on my /blogs page:

![Synthwave text animation](/synthwavey-baby.gif)
