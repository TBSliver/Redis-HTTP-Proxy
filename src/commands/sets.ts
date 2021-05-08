import {redisCallback, redisClient} from "../main";
import {Router} from "express";

const router = Router();

router.post('/sadd/:key', (req, res) => {
    redisClient.sadd(req.params.key, req.body, redisCallback(res));
});

router.post('/srem/:key', (req, res) => {
    redisClient.srem(req.params.key, req.body, redisCallback(res));
});

router.get('/scard/:key', (req, res) => {
    redisClient.scard(req.params.key, redisCallback(res));
});

router.get('/smembers/:key', (req, res) => {
    redisClient.smembers(req.params.key, redisCallback(res));
});

export const setsRouter = router;
