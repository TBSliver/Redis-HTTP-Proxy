"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisCallback = exports.redisClient = void 0;
var express_1 = __importDefault(require("express"));
var redis_1 = __importDefault(require("redis"));
var sets_1 = require("./commands/sets");
var strings_1 = require("./commands/strings");
var PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
var REDIS_URL = (_b = process.env.REDIS_URL) !== null && _b !== void 0 ? _b : "redis://127.0.0.1:6379";
var app = express_1.default();
app.use(express_1.default.json());
exports.redisClient = redis_1.default.createClient({
    url: REDIS_URL,
    retry_strategy: function (options) {
        // reconnect after
        console.log("Redis connection lost - attempting retry " + options.attempt);
        return Math.min(options.attempt * 100, 5000);
    },
});
var redisCallback = function (res) { return function (err, val) {
    if (err) {
        res.status(500);
        res.json(err);
    }
    res.json(val);
}; };
exports.redisCallback = redisCallback;
app.get("/", function (req, res) {
    exports.redisClient.ping(exports.redisCallback(res));
});
app.use(sets_1.setsRouter);
app.use(strings_1.stringsRouter);
app.listen(PORT, function () {
    var _a;
    if (((_a = process.env) === null || _a === void 0 ? void 0 : _a.NODE_ENV) !== "production")
        console.log("server listening at http://localhost:" + PORT);
});
//# sourceMappingURL=main.js.map