import express, { NextFunction, Request, Response } from "express";
import path from "path";
import { adminRouter } from "./routes/adminRoutes";
import { shopRouter } from "./routes/shopRoutes";

const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Public directory
export const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.use("/admin", adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found", path: "/" });
});

app.listen(process.env.PORT || 4000, () => {
  console.log(process.env.PORT);
  console.log("Server running in port " + process.env.PORT);
});
