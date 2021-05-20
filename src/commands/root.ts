import {redisClient} from "../redis-client";
import {redisCallback} from "../app";
import {Router} from "express";

export const rootRouter = Router();

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
rootRouter.get("/", (req, res) => {
    redisClient.ping(redisCallback(res))
});
