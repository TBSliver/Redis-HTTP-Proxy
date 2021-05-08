"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringsRouter = void 0;
var main_1 = require("../main");
var express_1 = require("express");
var router = express_1.Router();
router.post('/set/:key', function (req, res) {
    main_1.redisClient.set(req.params.key, req.body, main_1.redisCallback(res));
});
router.get('/get/:key', function (req, res) {
    main_1.redisClient.get(req.params.key, main_1.redisCallback(res));
});
exports.stringsRouter = router;
//# sourceMappingURL=strings.js.map