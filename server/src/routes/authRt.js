import express from "express";
import { HomeIndex } from "../controllers/authCon.js";

export const authRt = express();
    authRt.get("/", HomeIndex);





