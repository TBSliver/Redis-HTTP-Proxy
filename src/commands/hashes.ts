import {redisCallback} from "../app";
import {redisClient} from "../redis-client";
import {Router} from "express";

export const hashesRouter = Router();

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
hashesRouter.get('/hgetall/:key', (req, res) => {
    redisClient.hgetall(req.params.key, redisCallback(res));
});

/**
 * @openapi
 * /hvals/{key}:
 *   get:
 *     tags:
 *       - Hashes
 *     description: Get the values for a hash. [Redis HVALS Docs](https://redis.io/commands/hvals)
 *     parameters:
 *       - in: path
 *         name: key
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Returns the value for the field
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example: [ "123", "456" ]
 */
hashesRouter.get('/hvals/:key', (req, res) => {
    redisClient.hvals(req.params.key, redisCallback(res));
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
hashesRouter.get('/hget/:key/:field', (req, res) => {
    redisClient.hget(req.params.key, req.params.field, redisCallback(res));
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
hashesRouter.post('/hset/:key/:field', (req, res) => {
    redisClient.hset(req.params.key, req.params.field, req.body, redisCallback(res));
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
hashesRouter.get('/hdel/:key/:field', (req, res) => {
    redisClient.hdel(req.params.key, req.params.field, redisCallback(res));
});
