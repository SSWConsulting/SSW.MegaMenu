## How to use the Mega Menu

### Current Library Usage

We are currently using this library for the following projects:

- SSW.Website
- SSW.People
- SSW.Rules

The data for these projects is hosted on GitHub at: https://github.com/SSWConsulting/SSW.Website/blob/main/content/megamenu/menu.json.

### Editing Process

To make any edits, you need to use TinaCMS mode to update the content.

![MEGAMENU](https://github.com/SSWConsulting/SSW.MegaMenu/assets/71385247/39c7e9b6-d9fe-4e45-9ed2-6d41ec204dd3)

**Figure: TinaCMS mode to edit the megamenu data** 
 
### Installation

1. Install package
```bash
npm install ssw.megamenu
```

```bash
yarn add ssw.megamenu
```

```bash
pnpm add ssw.megamenu
```

2. Import the generated styles

```javascript
import "ssw.megamenu/dist/style.css";
```

**NOTE: If you have TailwindCSS installed in your project, you can instead list the `ssw.megamenu` package in your `tailwind.config.js` content array and add the SSW colors like so:**

```js
// tailwind.config.js

// ...

module.exports = {
  // ...
  content: [
    // ...
    "node_modules/ssw.megamenu/**/*.js",
  ],
  // ...
  theme: {
    extend: {
      colors: {
        ssw: {
          red: "#cc4141",
          light: {
            red: "#d26e6e",
          },
          gray: "#797979",
          black: "#333333",
        },
      },
    }
  }
};

```

3. You can then use the components in your React app like so:
```javascript
// CommonJS
const { Menu, MobileMenu, MenuBar } = require('ssw.megamenu');

// ESM
import { MegaMenuLayout } from 'ssw.megamenu';
```

### Basic Usage

The `ssw.megamenu` NPM package provides you with the `<MegaMenuLayout />` component, which can be used in both client-side and server-side rendered React apps.

#### Example:

```tsx
import { MegaMenuLayout } from 'ssw.megamenu';

function App() {
  return (
    <MegaMenuLayout />
    /* {{ CONTENT_HERE }} */
  );
}

```

### Usage with SSR 

The `<MegaMenuLayout />` component can be used with SSG (Static Site Generation) and SSR (Server Side Rendering) frameworks like Next.js and Gatsby. This is achieved by providing an optional prop in the `<MegaMenuLayout />` component called `menuBarItems`, which is an array of objects that represent the menu bar items.

#### Example usage with SSR (Next.js):

```tsx
import { MegaMenuLayout } from 'ssw.megamenu';

function App(props) {
  return (
    <MegaMenuLayout menuBarItems={props.menuBarItems} />
    /* {{ CONTENT_HERE }} */
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

### Available Props 

| Prop Name | Type | Description | Required |
| --- | --- | --- | --- |
| `menuBarItems` | `MenuBarItem[]` | An array of objects that represent the menu bar items provided by SSR or other data fetching mechanisms. If this prop isn't supplied, the component will fetch the data from the Next.js API route. | No |
| `title` | `string` | The title text displayed next to the SSW logo. | Yes (If there is no `tagline` provided) |
| `subtitle` | `string` | The text displayed underneath the SSW logo | No |
| `tagline` | `string` | The text displayed next the SSW Logo. | No |
| `url` | `string` | The URL of the menu bar item. | No |
| `searchUrl` | `string` | The absolute URL the search takes you to. If not provided, will default to the host address. i.e. for SSW <www.ssw.com.au> | No |
| `rightSideActionsOverride` | `() => JSX.Element` | The component to replace the "Call Us" and search buttons that are displayed by default on the right side of the menu. | No |
| `linkComponent` | <code>React.FC<{<br>&nbsp;href: string;<br>&nbsp;className?: string;<br>&nbsp;title?: string;<br>&nbsp;onClick?: () => void;<br>&nbsp;children?: React.ReactNode;<br>}></code> | The component to use for the links in the menu. i.e. `<Link>` from `next/link` or `gatsby`  | No |
| `callback` | `(seachTerm: string) => void` | Callback run on search. If provided, the search will not open a google tab. | No | 
  

### Testing 

When using `pnpm link` on the SSW.Website project, we encountered some issues with using `ssw.megamenu`, so instead use `file:` in the `package.json` file to link the package like so:

```json
{
  "dependencies": {
    "ssw.megamenu": "file:../SSW.MegaMenu"
  }
}
```

Replace `../SSW.MegaMenu` with the path to the `SSW.MegaMenu` project on your local machine.

## How to contribute?

In the project directory, you can run:

### `pnpm dev`

Runs the app in the development mode.


Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.

### `pnpm build`

Builds the lib for production to the `dist` folder.<br />

### How to publish?

1. **Important: Before to push your changes, you need to increment the version number in the file package.json using [semver](https://semver.org/)**
2. Make a pull request to add your code into the `main` branch.
3. Get the pull request approved
4. Merge your code into the `main` branch
5. Publish a GitHub release with the same version number as the one you incremented in the file package.json at https://github.com/SSWConsulting/SSW.MegaMenu/releases
