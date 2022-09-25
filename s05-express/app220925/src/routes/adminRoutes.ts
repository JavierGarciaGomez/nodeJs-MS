import { Router } from "express";
import path from "path";
import { publicPath } from "../index";

// const rootDir = require("../util/path");
export const adminRouter = Router();

// /admin/add-product => GET
adminRouter.get("/add-product", (req, res, next) => {
  res.status(404).sendFile(path.join(publicPath, "views/add-product.html"));
});

// /admin/add-product => POST
adminRouter.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
