---
title: React finally feels right
description: I've been using React for a while now, and with server components and Next.js, it finally feels right.
date: May 24, 2023
tags:
  - Development
  - Spicy hot takes
---

React is a great tool for building UIs. It's declarative, and it's easy to reason about. It's also easy to get started with, and has a great ecosystem of tools and libraries.

## What problem does React solve?

So, I've been writing applications for a bit and before React, writing complex UI was _really_ hard. I remember writing a lot of jQuery code, and it was a nightmare. I had to keep track of the state of the DOM, and make sure that I was updating it correctly.

Consider the following: You have been tasked with building a simple web app that displays a list of users. You have a list of users, and you want to display them in a table. You also want to be able to sort the users by name, and filter them by name. You also want to be able to add new users to the list.

### The old way

```js
var users = ["Alice", "Bob", "Charlie", "Dave"];

$(document).ready(function () {
  function renderUsers() {
    $("#users-table tbody").empty();
    users.forEach(function (user) {
      $("#users-table tbody").append("<tr><td>" + user + "</td></tr>");
    });
  }

  renderUsers();

  $("#search").on("input", function () {
    var searchText = $("#search").val().toLowerCase();
    var filteredUsers = users.filter((user) =>
      user.toLowerCase().includes(searchText)
    );
    users = filteredUsers;
    renderUsers();
  });

  $("#add-button").on("click", function () {
    var newUser = $("#add-user").val();
    users.push(newUser);
    renderUsers();
    $("#add-user").val("");
  });
});
```

There are a number of things to contend with in this solution.

First, we have to keep track of the state of the DOM, and manually choose if and when to re-render the content. When we update the search filter, we have to remember to render users. When we add a new user, we have to remember to render users. In most modern apps, there are many different actions a user could take that would require a re-render.

In fact, this was so annoying that for a long time, component state was lifted into the URL and the URL was the source of truth for the application state.

### The React way

```jsx
import React, { useState } from "react";

const UsersApp = () => {
  const [users, setUsers] = useState(["Alice", "Bob", "Charlie", "Dave"]);
  const [searchText, setSearchText] = useState("");
  const [newUser, setNewUser] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleAddUser = () => {
    setUsers([...users, newUser]);
    setNewUser("");
  };

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h2>Users App</h2>
      Filter: <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Search by name..."
      />
      <br />
      <br />
      Add User:{" "}
      <input
        type="text"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
        placeholder="Add a user..."
      />
      <button onClick={handleAddUser}>Add</button>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>{user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersApp;
```

React, at its core, allows you to break apart user interfaces into individual components and define any state _and their state transitions_ in that component. React's unidirectional data flow makes updating a user interface predicable and reliable.

## Synchronization

We've just gotten a new requirement for our users app. We have a giveaway going on, and we want to display a special background for the user that wins the giveaway. Users are entered into the giveraway once they are added to the list, and as a side effect of their addition, we need to request the winner from an arbitrary server.

```js
function renderUsers() {
  $("#users-table tbody").empty();
  users.forEach(function (user) {
    $.getJSON(`https://is-that-you.com/${user}`, function (data) {
      var row = $("<tr><td>" + user + "</td></tr>");
      if (data.isCharlie) {
        row.addClass("gray-background");
      }
      $("#users-table tbody").append(row);
    });
  });
}
```

```jsx
import React, { useState, useEffect } from "react";

const UsersApp = () => {
  const [users, setUsers] = useState(["Alice", "Bob", "Charlie", "Dave"]);
  const [searchText, setSearchText] = useState("");
  const [newUser, setNewUser] = useState("");
  const [winner, setIsWinner] = useState({});

  useEffect(() => {
    users.forEach(async (user) => {
      const response = await fetch(`https://giveaway.com/${user}`);
      const data = await response.json();
      setIsWinner((prev) => ({ ...prev, [user]: data.winner }));
    });
  }, [users]);

  // ...
  return (
    // ...
    <tbody>
      {filteredUsers.map((user, index) => (
        <tr
          key={index}
          style={winner[user] ? { backgroundColor: "winner-gold" } : {}}
        >
          <td>{user}</td>
        </tr>
      ))}
    </tbody>
    // ...
  );
};
```

And just like that, the magic is gone. We have used a side effect to request the winner from the server, and we have to manually keep track of the winner in our component state. We also have to give react a list of values to track, essentially telling it "Hey, if any of these values change, re-run this effect". We own the re-rendering again. Boo.

## Why are React server components so exciting?

React introduced a new feature called server components, which are React components that are processed and rendered by a server (Node.js). Server components allow developers to build applications that span the server and client, combining the rich interactivity of client-side apps with the improved performance of traditional server rendering. Server components can also access server-side resources such as databases, files, or APIs directly, without having to use REST or GraphQL endpoints.

React Server Components are different from SSR in that they don’t generate HTML strings, but rather stream JSON data to the client. This data contains information about the React elements that need to be rendered on the client, as well as any props or state that they need.

RSCs can also import and use other React components, either server components or client components. Server components can only use server-safe modules, such as database queries or file system operations, while client components can use browser APIs or custom hooks. This way, developers can easily separate the concerns of data fetching and UI rendering, and leverage the strengths of each environment.

## What does this mean for our users app?

```jsx
export default async function UsersApp() {
  const users = ["Alice", "Bob", "Charlie", "Dave"];
  const response = await fetch(`https://giveaway.com/${user}`);
  const { winner } = await response.json();

  // ...

  return (
    // ...
    <tbody>
      {filteredUsers.map((user, index) => (
        <tr
          key={index}
          style={winner ? { backgroundColor: "winner-gold" } : {}}
        >
          <td>{user}</td>
        </tr>
      ))}
    </tbody>
    // ...
  );
}
```
