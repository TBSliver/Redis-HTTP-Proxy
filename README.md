# Redis HTTP Proxy

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
