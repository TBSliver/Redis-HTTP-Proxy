import {redisCallback, redisClient} from "../main";
import {Router} from "express";

const router = Router();

router.post('/set/:key', (req, res) => {
    redisClient.set(req.params.key, req.body, redisCallback(res));
});

router.get('/get/:key', (req, res) => {
    redisClient.get(req.params.key, redisCallback(res));
});

export const stringsRouter = router;
