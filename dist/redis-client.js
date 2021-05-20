"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisClient = void 0;
var redis_1 = __importDefault(require("redis"));
var REDIS_URL = (_a = process.env.REDIS_URL) !== null && _a !== void 0 ? _a : "redis://127.0.0.1:6379";
exports.redisClient = redis_1.default.createClient({
    url: REDIS_URL,
    retry_strategy: function (options) {
        // reconnect after
        console.log("Redis connection lost - attempting retry " + options.attempt);
        return Math.min(options.attempt * 100, 5000);
    },
});
//# sourceMappingURL=redis-client.js.map