# @brew-kit/devvit-server

Server-side utilities for [Devvit Web](https://developers.reddit.com/) apps.

Most apps should install the all-in-one [`@brew-kit/devvit`](../devvit) package instead.

## Install

```sh
npm install @brew-kit/devvit-server
```

Requires `@devvit/web` in your app.

## Usage

```ts
import { safeJsonParse } from '@brew-kit/devvit-server';

const settings = safeJsonParse(await redis.get('settings'), { enabled: false });
```

## License

BSD-3-Clause
