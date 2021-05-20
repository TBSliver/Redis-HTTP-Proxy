"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app_1.app.listen(PORT, function () {
    var _a;
    if (((_a = process.env) === null || _a === void 0 ? void 0 : _a.NODE_ENV) !== "production")
        console.log("server listening at http://localhost:" + PORT);
});
//# sourceMappingURL=server.js.map