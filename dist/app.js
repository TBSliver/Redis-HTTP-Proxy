"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisCallback = exports.app = void 0;
var express_1 = __importDefault(require("express"));
var sets_1 = require("./commands/sets");
var strings_1 = require("./commands/strings");
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swagger_1 = require("./swagger");
var root_1 = require("./commands/root");
var hashes_1 = require("./commands/hashes");
exports.app = express_1.default();
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.text());
var redisCallback = function (res) { return function (error, data) {
    if (error) {
        res.status(500);
        res.json({ error: error });
    }
    res.json({ data: data });
}; };
exports.redisCallback = redisCallback;
var AUTH_KEY = process.env.AUTH_KEY;
if (!AUTH_KEY)
    throw new Error("No Auth Key Set");
function checkAuth(req, res, next) {
    if (req.query.api_key === AUTH_KEY) {
        return next();
    }
    res.status(400);
    res.json({ error: "Not Authorised" });
}
console.log(swagger_1.swaggerSpec);
exports.app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
exports.app.use(checkAuth, root_1.rootRouter);
exports.app.use(checkAuth, sets_1.setsRouter);
exports.app.use(checkAuth, strings_1.stringsRouter);
exports.app.use(checkAuth, hashes_1.hashesRouter);
//# sourceMappingURL=app.js.map