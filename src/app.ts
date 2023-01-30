import express from "express";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use([json(), urlencoded({ extended: false }), cors()]);

export default app;