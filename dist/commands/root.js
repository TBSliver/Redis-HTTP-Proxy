"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootRouter = void 0;
var redis_client_1 = require("../redis-client");
var app_1 = require("../app");
var express_1 = require("express");
exports.rootRouter = express_1.Router();
/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
exports.rootRouter.get("/", function (req, res) {
    redis_client_1.redisClient.ping(app_1.redisCallback(res));
});
//# sourceMappingURL=root.js.map