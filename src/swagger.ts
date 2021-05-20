import swaggerJsDoc from "swagger-jsdoc";

const options = {
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
            {apiKey: []}
        ]
    },
    apis: ["./dist/**/*.js"],
};

export const swaggerSpec = swaggerJsDoc(options);
