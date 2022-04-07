"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setsRouter = void 0;
var app_1 = require("../app");
var express_1 = require("express");
var redis_client_1 = require("../redis-client");
exports.setsRouter = express_1.Router();
/**
 * @openapi
 * /sadd/{key}:
 *   post:
 *     tags:
 *       - Sets
 *     description: Add one or more members to a set. [Redis SADD Docs](https://redis.io/commands/sadd)
 *     parameters:
 *       - in: path
 *         name: key
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       description: Members to add to the set. Text/plain will only take a single member
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             example: ["bleep","bloop"]
 *         text/plain:
 *           schema:
 *             type: string
 *             example: boing
 *     responses:
 *       200:
 *         description: Returns the number of members actually added to the set (not including duplicates)
 *         content:
 *           application/json:
 *             schema:
 *               type: integer
 *               example: 2
 */
exports.setsRouter.post('/sadd/:key', function (req, res) {
    redis_client_1.redisClient.sadd(req.params.key, req.body, app_1.redisCallback(res));
});
/**
 * @openapi
 * /srem/{key}:
 *   post:
 *     tags:
 *       - Sets
 *     description: Remove one or more members from the set. [Redis SREM Docs](https://redis.io/commands/srem)
 *     parameters:
 *       - in: path
 *         name: key
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       description: Members to remove from the set
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             example: ["bleep","bloop"]
 *     responses:
 *       200:
 *         description: Returns the number of members actually removed from the set
 *         content:
 *           application/json:
 *             schema:
 *               type: integer
 *               example: 2
 */
exports.setsRouter.post('/srem/:key', function (req, res) {
    redis_client_1.redisClient.srem(req.params.key, req.body, app_1.redisCallback(res));
});
/**
 * @openapi
 * /scard/{key}:
 *   get:
 *     tags:
 *       - Sets
 *     description: Get the number of members in a set. [Redis SCARD Docs](https://redis.io/commands/scard)
 *     parameters:
 *       - in: path
 *         name: key
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Returns the number of elements in the set
 *         content:
 *           application/json:
 *             schema:
 *               type: integer
 *               example: 2
 */
exports.setsRouter.get('/scard/:key', function (req, res) {
    redis_client_1.redisClient.scard(req.params.key, app_1.redisCallback(res));
});
/**
 * @openapi
 * /smembers/{key}:
 *   get:
 *     tags:
 *       - Sets
 *     description: Get the members in a set. [Redis SMEMBERS Docs](https://redis.io/commands/smembers)
 *     parameters:
 *       - in: path
 *         name: key
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Returns the members in the set
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example: ["bleep", "bloop"]
 */
exports.setsRouter.get('/smembers/:key', function (req, res) {
    redis_client_1.redisClient.smembers(req.params.key, app_1.redisCallback(res));
});
/**
 * @openapi
 * /sismember/{key}:
 *   post:
 *     tags:
 *       - Sets
 *     description: Checks if a member is in a set. [Redis SISMEMBER Docs](https://redis.io/commands/sismeber)
 *     parameters:
 *       - in: path
 *         name: key
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       description: Member to check is in the set.
 *       required: true
 *       content:
 *         text/plain:
 *           schema:
 *             type: string
 *             example: bleep
 *         application/json:
 *           schema:
 *             type: array
 *             example: ["bleep"]
 *     responses:
 *       200:
 *         description: Returns 1 if the member is in the set, 0 otherwise
 *         content:
 *           application/json:
 *             schema:
 *               type: integer
 *               example: 1
 */
exports.setsRouter.post('/sismember/:key', function (req, res) {
    redis_client_1.redisClient.sismember(req.params.key, req.body, app_1.redisCallback(res));
});
//# sourceMappingURL=sets.js.map