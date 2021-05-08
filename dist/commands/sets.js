"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setsRouter = void 0;
var main_1 = require("../main");
var express_1 = require("express");
var router = express_1.Router();
router.post('/sadd/:key', function (req, res) {
    main_1.redisClient.sadd(req.params.key, req.body, main_1.redisCallback(res));
});
router.post('/srem/:key', function (req, res) {
    main_1.redisClient.srem(req.params.key, req.body, main_1.redisCallback(res));
});
router.get('/scard/:key', function (req, res) {
    main_1.redisClient.scard(req.params.key, main_1.redisCallback(res));
});
router.get('/smembers/:key', function (req, res) {
    main_1.redisClient.smembers(req.params.key, main_1.redisCallback(res));
});
exports.setsRouter = router;
//# sourceMappingURL=sets.js.map