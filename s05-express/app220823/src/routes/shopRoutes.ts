import { Router } from "express";
import path from "path";
import { publicPath } from "../index";

// const rootDir = require("../util/path");

export const shopRouter = Router();

shopRouter.get("/", (req, res, next) => {
  res.status(404).sendFile(path.join(publicPath, "views/shop.html"));
});
