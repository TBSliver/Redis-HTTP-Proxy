# Redis HTTP Proxy

HTTP based Redis proxy. Currently has no authentication layer, and only implements a subset of redis functions.

This is initially being built to allow access to the Redis DB used by ATLAS from inside the dev kit. Associated
Blueprints for that will be coming if it actually all works!


Setup and start:

```shell
npm install --production
npm run start
```

Setup for Dev

```shell
npm install
npm run watch
```

## Runtime options

### Redis

Redis connection can be set by using the `REDIS_URL` environment variable. For options available, please consult
the [`node-redis` documentation](https://github.com/NodeRedis/node-redis#options-object-properties) `url` property

```shell
# on *nix
export REDIS_URL="redis://127.0.0.1:6379"
# on windows with cmd
set REDIS_URL="redis://127.0.0.1:6379"
# on windows powershell
$env:REDIS_URL = "redis://127.0.0.1:6379"
```

This defaults to `redis://127.0.0.1:6379`

### Port

The port can be set by using the `PORT` environment variable

```shell
# on *nix
export PORT=3000
# on windows with cmd
set PORT=3000
# on windows powershell
$env:PORT = 3000
```

This defaults to `3000`

### Auth Key

The Auth Key used for authentication must be set using the `AUTH_KEY` environment variable

```shell
# on *nix
export AUTH_KEY=3000
# on windows with cmd
set AUTH_KEY=3000
# on windows powershell
$env:AUTH_KEY = 3000
```

This has no default and will throw an error if not set.
