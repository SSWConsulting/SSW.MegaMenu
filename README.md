## How to use the Mega Menu

### Installation

1. install package
```bash
npm install ssw.megamenu
```
2. import global styles
```javascript
import "ssw.megamenu/dist/style.css";
```
3. use components in your project
```javascript
// commonjs
const { Menu, MobileMenu, MenuBar } = require('ssw.megamenu');
// es module
import { Menu, MobileMenu, MenuBar } from 'ssw.megamenu';
```

### Basic Usage

The `ssw.megamenu` NPM package provides you with the `<MegaMenuLayout />` component, which can be used in both client-side and server-side rendered React apps.

#### Example:

```tsx
import React, { useState, useRef } from 'react';
import { Menu, MobileMenu } from 'ssw.megamenu';
import './App.css';

function App() {
  return (
    <header className="App-header">Test MenuBar</header>
    <MegaMenuLayout />
    <div>Some content</div>
  );
}

```

### Usage with SSR 

The `<MegaMenuLayout />` component can be used with SSG (Static Site Generation) and SSR (Server Side Rendering) frameworks like Next.js and Gatsby. This is achieved by providing an optional prop in the `<MegaMenuLayout />` component called `menuBarItems`, which is an array of objects that represent the menu bar items.

#### Example usage with SSR (Next.js):

```tsx

import React, { useState, useRef } from 'react';
import { Menu, MobileMenu } from 'ssw.megamenu';
import './App.css';

function App(props) {
  return (
    <header className="App-header">Test MenuBar</header>
    <MegaMenuLayout menuBarItems={props.menuBarItems} />
    <div>Some content</div>
  );
}

export function getStaticProps() {
  const menuItems = await getMenuItems();

  return {
    props: {
      menuItems,
    },
  };
}

```

## How to contribute?

In the project directory, you can run:

### `pnpm dev`

Runs the app in the development mode.<br />
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.<br />

### `pnpm build`

Builds the lib for production to the `dist` folder.<br />

### How to publish?

1. **Important: Before to push your changes, you need to increment the version number in the file package.json**
2. Make a pull request to integrate your code into the main branch.
3. Get the pull request approved
4. Merged your code into main branch
5. Package published by github actions
