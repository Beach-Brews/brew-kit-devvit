# @brew-kit/devvit-client

Tailwind CSS theme and React components for [Devvit](https://developers.reddit.com/) apps.

Most apps should install the all-in-one [`@brew-kit/devvit`](../devvit) package instead.

## Install

```sh
npm install @brew-kit/devvit-client
```

Requires `react` 19 and `tailwindcss` 4 in your app.

## Usage

Add the theme to your app's main CSS file, after Tailwind:

```css
@import 'tailwindcss';
@import '@brew-kit/devvit-client/theme.css';
```

Then use the components:

```tsx
import { Button } from '@brew-kit/devvit-client';

<Button variant="secondary">Click me</Button>;
```

Components are published one file per module, so your app only bundles the ones it imports.

## Development

```sh
npm run dev     # component playground (dev/) at http://localhost:5173
npm run build   # library build into dist/
```

The `dev/` playground is never published. Only `dist/` is included in the package.

## License

BSD-3-Clause
