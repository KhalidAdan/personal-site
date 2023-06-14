---
title: "Embarking on a Technological Odyssey: New projects, new horizons"
description: "I am going to spend some time refreshing my knowledge of computer science (been awhile since school), as I'd like to do start doing some longer term hobby projects outside of my unannounced saas product."
date: 2023-06-20T04:00:00.000Z
tags:
  - Browsers
  - Operating Systems
---

Historically, I only revisited subjects from my school days when preparing for job interviews. These study sessions consisted of a few days of cramming and practicing LeetCode questions, after which I promptly forgot everything. Recently, however, my usual web programming pursuits haven't been satisfying, prompting me to seek deeper engagement. I believe that diving into a hobby project or two could reignite my passion.

My primary interest lies in gaining depth of understanding. I yearn to return to the basics, to grasp the inner workings of technology. I desire to create something from the ground up and conclude the project with a profound understanding of the underlying concepts. The project's public release isn't important to me; instead, I want to take pride in the fact that I built it myself, fully understand its operation, and could recreate it if necessary.

## The idea

Having worked with web technologies for some time, I have a few ambitious ideas that I'd like to explore. They include:

### A more cohesive web experience

The internet, in its current form, appears more fragmented and divided than its initial promises suggested. Once upon a time, we each had our unique space online, accessible and visible, not just profiles on someone else's platform. It's hard to pinpoint _why_ it felt different; it wasn't merely the novelty, there was something more.

My somewhat vague, lofty ambition is to create an online space that deep-links all your content into an environment that is distinctly yours. Imagine a space where your YouTube videos play while your emails are being scanned, all the while receiving notifications from Twitter or Discord. Imagine a space that adjusts to your needs, _generating your UI_ based on context and hosting an assistant that supports you like a second brain. A space not tied to a single device but accessible from anywhere on the web, a space that truly belongs to _you_.

Key features of this space should include:

1. Add widgets to your space that can be used to display content from other sites, ideally via some sort of CLI and/or web UI
2. Have a way to deep link to content in your space
3. Organize your content in a way that makes sense to you, with folders and tags
4. Have a way to search your content
5. Have a way to share your content with others, and create content (widgets) that can be shared with others

Now it goes without saying this is a _huge_ undertaking. I'm unsure whether it will ever come to fruition, but I'm eager to learn.

### A more intuitive way to interact with your computer

This concept is undoubtedly the more challenging of the two. After some consideration, I have a rough blueprint of what I'd like to achieve.

I envision a new way to interact with your computer that is more intuitive and natural. Before I elaborate, I want to provide some context regarding my current computing experience.

As a Windows user who uses Macs for work, I've been a lifelong gaming enthusiast, and PCs have always provided the most reliable gaming experience. However, the Windows experience has never quite resonated with me. I've often felt as though I'm wrestling with the OS to accomplish my tasks. The Mac's user experience is superior, and making alterations is effortless. However, the lack of comprehensive video game support is a dealbreaker.

The disparity between the ease of navigation, installation, and customization on a Mac compared to my Windows experience is glaringly apparent. It's so significant that it has compelled me to ponder potential improvements. Questions that cross my mind include:

1. Why do we install programs? Why can't we just run them?
2. Why do we have to install drivers? Why can't we just plug and play? What do drivers even do _really_?
3. Is there a better way to organize userspace data? Are folders and files the best we can come up with?
4. Is there a UX that is more intuitive than the current one? What would it look like?

I have some idea on the answers to these questions from school, but I'd like to explore them further in a setting that doesn't arbitrarily end after 4 months. I'm not sure if I'll ever be able to create a better experience, but I'm eager to learn.

### The Plan

I'm going to start with the basics and work my way up. I'll be using this blog to document my progress. I'll be starting with the following topics:

#### Building a web browser

After some preliminary research, I believe developing a Chromium-based web browser is a viable approach. My goals for this project include:

1. Thorough research to identify unknowns through various sources such as YouTube videos, blogs, and books
2. Finding an existing Chromium fork to use as a base, preferably one that doesn't rely on Google
3. Possibly purging the project of all Google-related code4. Incorporating a CLI for browser interaction
4. Adding a feature to display widgets from other sites

#### Making an operating system

Undertaking the creation of an operating system may seem intimidating, but it's an avenue I'm eager to explore. As with the browser project, the first step involves:

1. **Comprehensive Research**: I plan to dig deep into the fundamentals of operating systems through various resources such as online courses, technical articles, books, and forums. Key topics include the design and operation of modern operating systems, focusing on aspects like process management, memory management, file systems, and security.
2. **Understanding Kernels**: The kernel is the core component of an operating system, so having a firm grasp of its functionality is vital. I aim to learn about different types of kernels such as monolithic kernels, microkernels, and hybrid kernels, and how they influence the system's performance and functionality.
3. **Exploring Drivers**: Drivers facilitate the interaction between the hardware and the operating system. I'm curious about why they're needed and how they function. Additionally, I'll investigate the feasibility of a plug-and-play approach and the implications it would have on system performance and user experience.
4. **Learning System Architecture**: I'll delve into learning about system architecture and how the various parts of an operating system interact with each other. Understanding system calls, libraries, and the user interface will be crucial to this learning objective.
5. **Studying User Interface (UI) Design**: An integral part of any operating system is its UI. I want to look at different UI designs and understand what makes a user interface intuitive and user-friendly.

### The Process

Throughout this process, I plan to maintain open communication, sharing insights, victories, and hurdles in future blog posts. I am aware that this endeavor might not be easy, but I'm excited about the immense learning opportunities it presents. Whether or not these ambitious projects succeed, the journey promises to be an enriching experience.

### Sources

I'll be starting with the following books / sites:

[Operating Systems: Three Easy Pieces](http://pages.cs.wisc.edu/~remzi/OSTEP/)
[Operating Systems: Internals and Design Principles](https://books.google.ca/books/about/Operating_Systems.html?id=CIk9YgEACAAJ&redir_esc=y)
[Browser Engineering](https://browser.engineering/)
[Let's Build a Browser Engine](https://limpet.net/mbrubeck/2014/08/08/toy-layout-engine-1.html)
[Chromium](https://www.chromium.org/Home/)
