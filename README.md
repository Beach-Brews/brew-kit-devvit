# brew-kit-devvit

Reusable components and utilities for [Devvit](https://developers.reddit.com/) apps, published under the `@brew-kit` npm scope.

## Packages

| Package                   | Description                                                 |
| ------------------------- | ----------------------------------------------------------- |
| `@brew-kit/devvit`        | All-in-one package. Install this one in your Devvit app.    |
| `@brew-kit/devvit-client` | Tailwind theme and React UI components.                     |
| `@brew-kit/devvit-server` | Server-side utilities for Devvit Web.                       |
| `@brew-kit/devvit-mock`   | Mocks of Devvit APIs for local Vite development and Vitest. |

```ts
import { SomeComponent } from '@brew-kit/devvit/client';
```

## Development

Requires Node 22+ and npm. The repo uses npm workspaces, with Turborepo running tasks in dependency order.

```sh
npm install
npm run build       # build all packages in dependency order
npm run dev         # run dev servers / watch builds
npm run lint        # ESLint across the repo
npm run format      # Prettier across the repo
npm run typecheck   # type-check every package
npm run check       # format check + lint + typecheck
```

To work on UI components, run the playground on its own:

```sh
npm run dev -w @brew-kit/devvit-client   # http://localhost:5173
```

The playground lives in `packages/devvit-client/dev/` and is never published; each package only ships its `dist/` folder.

### Bundle size

Packages are ESM-only, mark themselves `sideEffects: false` (CSS excepted), and publish one output file per source module. An app's bundler therefore only includes the components and utilities it actually imports, including through `@brew-kit/devvit`.

### Repo layout

```
packages/
  devvit/          @brew-kit/devvit
  devvit-client/   @brew-kit/devvit-client (dev/ = component playground)
  devvit-server/   @brew-kit/devvit-server
  devvit-mock/     @brew-kit/devvit-mock
tsconfig.base.json shared compiler options every package extends
turbo.json         task pipeline (build order, caching)
eslint.config.js   shared lint rules
```

## License

[BSD-3-Clause](LICENSE) © Beach-Brews
