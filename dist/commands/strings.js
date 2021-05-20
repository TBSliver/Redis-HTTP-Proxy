"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringsRouter = void 0;
var app_1 = require("../app");
var redis_client_1 = require("../redis-client");
var express_1 = require("express");
exports.stringsRouter = express_1.Router();
/**
 * @openapi
 * /set/{key}:
 *   post:
 *     tags:
 *       - Strings
 *     description: Set the value on a key. [Redis SET Docs](https://redis.io/commands/set)
 *     parameters:
 *       - in: path
 *         name: key
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       description: Value to set the key to. Can be a string or number
 *       required: true
 *       content:
 *         text/plain:
 *           schema:
 *             type: string
 *             example: bleep
 *     responses:
 *       200:
 *         description: Returns OK on success
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: OK
 */
exports.stringsRouter.post('/set/:key', function (req, res) {
    redis_client_1.redisClient.set(req.params.key, req.body, app_1.redisCallback(res));
});
/**
 * @openapi
 * /get/{key}:
 *   get:
 *     tags:
 *       - Strings
 *     description: Get the members in a set. [Redis GET Docs](https://redis.io/commands/get)
 *     parameters:
 *       - in: path
 *         name: key
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Returns the value for the key
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "bleep"
 */
exports.stringsRouter.get('/get/:key', function (req, res) {
    redis_client_1.redisClient.get(req.params.key, app_1.redisCallback(res));
});
//# sourceMappingURL=strings.js.map