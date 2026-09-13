# Dev Stack

Dev Stack is a simple web application for developers.  
It helps users explore different technologies and create their own development stack.

## About The Project

I created this project to practice React, TypeScript, and Tailwind CSS.

Here, users can see different technologies with their name, icon, category, rating, difficulty, and description. They can also add technologies to their own stack and manage the selected items.

## Technologies I Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify
- JSON
- Vite

## Features

- Users can browse different technologies.
- Users can add technologies to their own stack.
- Users can remove one technology or remove all selected technologies.
- Toast messages are shown when adding, removing, or trying to add the same technology again.

---

# React Questions

### 1. What is JSX, and why is it used in React?

JSX is a way to write HTML-like code inside JavaScript or TypeScript.

I use JSX in React because it makes the UI code easier to write and understand.

### 2. What is the difference between props and state?

Props are used to send data from a parent component to a child component.

State is used to store data inside a component that can change.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data in a React component.

I used it to store the technologies that the user adds to the "Your Stack" section.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run some code when a component loads or when some data changes.

I used it to load the technology data from the JSON file when the page loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

It helps React know which item has changed, been added, or removed.

