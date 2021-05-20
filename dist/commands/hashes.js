"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashesRouter = void 0;
var app_1 = require("../app");
var redis_client_1 = require("../redis-client");
var express_1 = require("express");
exports.hashesRouter = express_1.Router();
/**
 * @openapi
 * /hgetall/{key}:
 *   get:
 *     tags:
 *       - Hashes
 *     description: Get the values of a hash. [Redis HGETALL Docs](https://redis.io/commands/hgetall)
 *     parameters:
 *       - in: path
 *         name: key
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Returns the hash for the key
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example: { "abc": "123" }
 */
exports.hashesRouter.get('/hgetall/:key', function (req, res) {
    redis_client_1.redisClient.hgetall(req.params.key, app_1.redisCallback(res));
});
/**
 * @openapi
 * /hget/{key}/{field}:
 *   get:
 *     tags:
 *       - Hashes
 *     description: Get the field value from a hash. [Redis HGET Docs](https://redis.io/commands/hget)
 *     parameters:
 *       - in: path
 *         name: key
 *         schema:
 *           type: string
 *         required: true
 *       - in: path
 *         name: field
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Returns the value for the field
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "123"
 */
exports.hashesRouter.get('/hget/:key/:field', function (req, res) {
    redis_client_1.redisClient.hget(req.params.key, req.params.field, app_1.redisCallback(res));
});
/**
 * @openapi
 * /hset/{key}/{field}:
 *   post:
 *     tags:
 *       - Hashes
 *     description: Set the value of a field from a hash. [Redis HSET Docs](https://redis.io/commands/hset)
 *     parameters:
 *       - in: path
 *         name: key
 *         schema:
 *           type: string
 *         required: true
 *       - in: path
 *         name: field
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       description: Value to set the field to. Can be a string or number
 *       required: true
 *       content:
 *         text/plain:
 *           schema:
 *             type: string
 *             example: bleep
 *     responses:
 *       200:
 *         description: Returns the number of fields added
 *         content:
 *           application/json:
 *             schema:
 *               type: number
 *               example: 1
 */
exports.hashesRouter.post('/hset/:key/:field', function (req, res) {
    redis_client_1.redisClient.hset(req.params.key, req.params.field, req.body, app_1.redisCallback(res));
});
/**
 * @openapi
 * /hdel/{key}/{field}:
 *   get:
 *     tags:
 *       - Hashes
 *     description: Delete the field value from a hash. [Redis HDEL Docs](https://redis.io/commands/hdel)
 *     parameters:
 *       - in: path
 *         name: key
 *         schema:
 *           type: string
 *         required: true
 *       - in: path
 *         name: field
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Returns the value for the field
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "123"
 */
exports.hashesRouter.get('hdel/:key/:field', function (req, res) {
    redis_client_1.redisClient.hdel(req.params.key, req.params.field, app_1.redisCallback(res));
});
//# sourceMappingURL=hashes.js.map