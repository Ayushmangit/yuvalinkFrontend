## YuvaLinkFrontend
## Tech Stack
* React
* Tailwind CSS
* BootStrap
## React + Vite
## Installation Set up
1. **Install React**
    ```
    ## React core libraries
    # react => To build UI Components
    # react-dom => To render React components on Browser
    npm install react react-dom
    ```
2. **Install Vite**
    ```
    # Vite (Development & Build Tool)
    # Vite => Fast development server + optimized production build
    npm install -D vite
    ```
3. **Install Tailwind CSS**
    ```
    npm install -D tailwindcss
    ```
4. **Install Bootstrap icons**
    ```
    npm install bootstrap-icons
    ```
## Usage 
 1. **React + React DOM**
      ```
         ## main.jsx
         import React from "react"; 
         import ReactDOM from "react-dom/client";
         import App from "./App";
         import "bootstrap/dist/css/bootstrap.min.css"; 
         import "bootstrap-icons/font/bootstrap-icons.css";
         import "./index.css";
         ReactDOM.createRoot(document.getElementById("root")).render(
              App/>
              );
      ```
 2. **Vite.config.js**
      ```
         ## vite.config.js 
         import {defineConfig} from "vite";
        import react from "@vitejs/plugin-react";
        export default defineConfig({
            plugins: [react()],
        });
      ```
3. **Tailwind CSS**
      ```
          @tailwind base;
          @tailwind components;
          @tailwind utilities;
      ```
      ```
          /** @type {import('tailwindcss').Config} */
          module.exports = {
            content: [
              "./index.html",
              "./src/**/*.{js,jsx,ts,tsx}"
            ],
            theme: {
              extend: {},
            },
            plugins: [],
          }
      ```
      ```
          ## Example usage in component
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Activate
          </button>
      ```
4. **Bootstrap Icons**
      ```
          import "bootstrap-icons/font/bootstrap-icons.css";
      ```
      ```
          <i className="bi bi-chat-dots-fill text-xl"></i>
      ```
## Project Structure
```
YuvaLinkFrontEnd/
    |-->src
        |-->components
            |-->ChatRoom.jsx
            |-->NewsFeed.jsx
            |-->Sidebar.jsx
            |-->statspanel.jsx
            |-->ActivityHistory.jsx
            |-->TaskCard.jsx
            |-->TaskSection.jsx
            |-->TeamDetails.jsx
            |-->Profile.jsx
        |-->pages
            |-->AdminDashboard.jsx
            |-->volunteer.jsx
        |-->Styles
            |-->admintailwind.css
            |-->chatroom.css
            |-->newsfeed.css
            |-->stats.css
            |-->Activity.css
            |-->tasks.css
            |-->profile.css
            |-->team.css
        |-->App.jsx
        |-->index.css
        |-->main.jsx
   |-->.env
   |-->index.html
   |-->package-lock.json
   |-->package.json
   |-->postcss.config.cjs
   |-->tailwind.config.js
   |-->vite.config.js
   |-->node_modules
   |-->public
|-->assets
|-->YuvaLinkReadme.md
|-->Installationguide.md
```
## Prototype
 * For Demo purpose only we have done backend integeration in user Auth [LandingPage](https://drive.google.com/file/d/1o8P14dIMkjN5666joIhA2HOEmXBjTQlV/view?usp=sharing)
 * For Better Understanding here is our [AdminDashBoard](https://drive.google.com/file/d/1Bq2kA70YmX_UDSljL3beI3itCxff6oWX/view?usp=sharing)
 * For Better Understanding here is our  [VolunteerDashBoard](https://drive.google.com/file/d/1Bq2kA70YmX_UDSljL3beI3itCxff6oWX/view?usp=sharing)
# React
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
