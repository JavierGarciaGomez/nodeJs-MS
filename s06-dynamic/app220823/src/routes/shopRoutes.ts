import { Router } from "express";
import path from "path";
import { publicPath } from "../index";
import { products } from "./adminRoutes";

// const rootDir = require("../util/path");

export const shopRouter = Router();

shopRouter.get("/", (req, res, next) => {
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});
