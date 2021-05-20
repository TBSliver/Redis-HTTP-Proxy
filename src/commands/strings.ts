import {redisCallback} from "../app";
import {redisClient} from "../redis-client";
import {Router} from "express";

export const stringsRouter = Router();

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
stringsRouter.post('/set/:key', (req, res) => {
    redisClient.set(req.params.key, req.body, redisCallback(res));
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
stringsRouter.get('/get/:key', (req, res) => {
    redisClient.get(req.params.key, redisCallback(res));
});
