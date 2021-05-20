"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = void 0;
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "Redis HTTP Proxy",
            version: "1.0.0",
        },
        components: {
            securitySchemes: {
                apiKey: {
                    type: "apiKey",
                    in: "query",
                    name: "api_key"
                }
            }
        },
        security: [
            { apiKey: [] }
        ]
    },
    apis: ["./dist/**/*.js"],
};
exports.swaggerSpec = swagger_jsdoc_1.default(options);
//# sourceMappingURL=swagger.js.map