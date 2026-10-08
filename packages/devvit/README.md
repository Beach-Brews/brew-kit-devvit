# @brew-kit/devvit

All-in-one package of reusable pieces for [Devvit](https://developers.reddit.com/) apps.
One dependency gives you:

| Import                              | What it is                           |
| ----------------------------------- | ------------------------------------ |
| `@brew-kit/devvit/client`           | React UI components                  |
| `@brew-kit/devvit/client/theme.css` | Tailwind CSS theme                   |
| `@brew-kit/devvit/server`           | Server-side utilities for Devvit Web |

## Install

```sh
npm install @brew-kit/devvit
```

Requires `react` 19, `tailwindcss` 4 and `@devvit/web` in your app.

## Usage

```css
/* your app's main CSS file */
@import 'tailwindcss';
@import '@brew-kit/devvit/client/theme.css';
```

```tsx
import { Button } from '@brew-kit/devvit/client';
import { safeJsonParse } from '@brew-kit/devvit/server';
```

Your app's bundler only includes what you import.

## License

BSD-3-Clause
