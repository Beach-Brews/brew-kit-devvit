# @brew-kit/devvit-mock

Mocks of [Devvit](https://developers.reddit.com/) APIs, so client and server code can run in a local Vite dev server or in Vitest outside of Reddit.

Most apps should install the all-in-one [`@brew-kit/devvit`](../devvit) package instead.

## Install

```sh
npm install --save-dev @brew-kit/devvit-mock
```

## Usage

Client side: answer your app's `/api/*` calls locally.

```ts
import { mockFetch } from '@brew-kit/devvit-mock/client';

mockFetch({
    'GET /api/init': () => Response.json({ username: 'test-user' }),
});
```

Server side: an in-memory Redis for tests.

```ts
import { createMemoryRedis } from '@brew-kit/devvit-mock/server';

const redis = createMemoryRedis({ counter: '1' });
await redis.incrBy('counter', 1); // 2
```

## License

BSD-3-Clause
