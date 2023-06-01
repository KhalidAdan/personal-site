---
title: "React finally feels right"
image: "/data-fetching.jpg"
description: "The addition of react server components finally makes react feel like a complete framework. Data fetching has been a point of contention for a while, and this new feature finally makes it feel like a first class citizen."
date: 2023-06-02T04:00:00.000Z
tags:
  - React
  - Development
---

In an effort to keep my skills up-to-date, I've been diving into React Server Components. Consequently, I felt it would be useful to share how I approach learning new concepts through a blog post. This style may differ from my usual approach, but I believe it's a great way to compile my findings for easy future reference. If others find this beneficial, that's an added bonus!

Apologies for the length of the post, but it's crucial to detail my complete learning process. I've segmented the post for a smoother reading experience.

### Understanding React Server Components

React Server Components are a new feature enabling server-side rendering and data fetching of React components.

At their essence, React Server Components enable developers to structure their applications in the familiar "request/response" model, commonly seen in traditional server-first web technologies like PHP, while maintaining the advantages of modern client-side rendering and UI interactivity. They don't need to be downloaded to the client, reducing bundle sizes and accelerating startup time. They can interact with server-side data sources, like databases, and integrate smoothly with traditional React components, also known as Client Components.

The outcome is a mechanism to circumvent waterfall requests, enabling us to load only the necessary data for page rendering, while simultaneously rendering the initial HTML server-side. This contrasts with current React applications where you may experience numerous loading spinners as each component fetches its data.

The only JavaScript dispatched to the client is the code necessary to ensure the functionality of the Client Components (denoted with "use client" at the file's start) and the React runtime. This still incurs a JavaScript bundle cost when utilizing React Server Components.

### What issues does this resolve?

The Request For Comments (RFC) for React Server Components outlines several problems they aim to address:

React provides excellent Developer Experience (DX), but User Experience (UX) may suffer when data fetches are slow. The main concern here is that users must wait for JavaScript to be downloaded, parsed, and executed before interacting with the page. This could result in a poor UX, particularly on mobile devices or slower connections.

**Zero-Bundle-Size Components:** Since Server Components are never downloaded to the client, they don't inflate the client-side bundle. This contributes to faster initial load times and improved Time to Interactive metrics.

**Full Access to the Backend:** Server Components can directly access server-side data sources, like databases or file systems, without exposing them to the client or creating custom APIs. This streamlines data fetching logic and mitigates the risk of inadvertently exposing sensitive data. Note: This is monumental as one of the most common issues in React code relates to client-server synchronization.

**Automatic Code Splitting:** Server Components can decide which Client Components to render based on the received props. This allows the client to download only the code necessary to render a page and enables features like partial hydration, where only some page sections are interactive.

**No Client-Server Waterfalls:** Server Components can fetch data concurrently on the server and pass it as props to Client Components, removing the need for multiple client-server round trips. This eradicates the necessity for loading spinners and skeleton screens during data fetches. A major advantage!

**Avoiding the Abstraction Tax:** Server Components enable developers to employ the same React model and syntax for both server and client rendering, without the need to learn new frameworks or abstractions. This minimizes cognitive load and maintenance costs associated with synchronizing different layers.

### What does this mean in practice?

In practice, React Server Components simplify app development. You can use the same React model and syntax for server and client rendering, access server-side data directly from your components without exposure to the client, and delegate code splitting and data fetching to React and the bundler. Additionally, you can share code between the server and client, allowing a single component to render a static content version on the server for one route and an editable version on the client for a different route.

### What are the limitations?

1. You need a compatible bundler supporting React Server Components, like Webpack 5 or Parcel 2, which might not be accessible or straightforward to set up for some projects.
2. They impose certain conventions and constraints when writing Server Components and Client Components, such as using a "use client" directive, "server-only" and "client-only" imports, or serializable boundaries, which may be unfamiliar or unintuitive to some developers.
3. They may not support specific features or APIs available in Client Components, like custom DOM events, portals, or third-party libraries relying on browser APIs or global variables.
4. They may introduce testing, debugging, or deployment challenges, such as mocking server-side data sources, handling errors or failures, or scaling server resources.

#### How will this impact me as a developer?

As a developer, your life changes in a few ways if you adopt this solution:

- You need to use a compatible bundler that supports React Server Components, such as Webpack 5 or Parcel 2.
- You need to follow some conventions for writing Server Components, such as using a “use client” directive at the top of a file that defines a Client Component boundary, or using “server-only” and “client-only” imports to poison a module so it can only be imported in that environment.
- You need to be aware of the capabilities and constraints of Server Components and Client Components, such as which hooks and APIs they can use, or how they handle state and effects.
- You need to use TypeScript or Flow to enforce serializable boundaries between Server Components and Client Components, ensuring that the props passed between them are JSON-compatible.
- You need to test your app in both server and client environments, using tools like Jest or React Testing Library.

### My final thoughts

React Server Components introduce significant enhancements to data fetching, yielding improved user experiences, performance, and developer workflows. This represents a significant stride forward for the React ecosystem and the broader frontend development landscape. Hence, it can be said that these new improvements make React feel "just right".

### Sources

- [React Server Components](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html)
- [RFC: React Server Components](https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md)
