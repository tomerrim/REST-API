import express from "express";
import { get, merge } from "lodash";
import { getUserBySessionToken } from "../controllers/userController";

const COOKIE_SECRET = process.env.COOKIE_SECRET;
console.log(COOKIE_SECRET)

export const isAuthenticated = async (req: express.Request, res: express.Response, next:express.NextFunction) => {
    try {
        const sessionToken = req.cookies[COOKIE_SECRET];

        if(!sessionToken) {
            return res.sendStatus(403);
        }

        const existingUser = await getUserBySessionToken(sessionToken);

        if(!existingUser) {
            return res.sendStatus(403)
        }

        merge(req, {identity: existingUser});

        return next()

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}