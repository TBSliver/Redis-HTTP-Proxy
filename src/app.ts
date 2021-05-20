import express, {NextFunction} from "express";
import {Response, Request} from "express-serve-static-core";
import {setsRouter} from "./commands/sets";
import {stringsRouter} from "./commands/strings";
import swaggerUi from "swagger-ui-express";
import {swaggerSpec} from "./swagger";
import {rootRouter} from "./commands/root";
import {hashesRouter} from "./commands/hashes";

export const app = express();
app.use(express.json());
app.use(express.text());

export const redisCallback = (res: Response) => (error: any, data: any) => {
    if (error) {
        res.status(500);
        res.json({error});
    }
    res.json({data});
}

const AUTH_KEY = process.env.AUTH_KEY;
if (!AUTH_KEY) throw new Error("No Auth Key Set");

function checkAuth(req: Request, res: Response, next: NextFunction) {
    if (req.query.api_key === AUTH_KEY) {
        return next();
    }
    res.status(400);
    res.json({error: "Not Authorised"});
}

console.log(swaggerSpec);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(checkAuth, rootRouter);
app.use(checkAuth, setsRouter);
app.use(checkAuth, stringsRouter);
app.use(checkAuth, hashesRouter);

