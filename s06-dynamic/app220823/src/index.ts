import express, { NextFunction, Request, Response } from "express";
import path from "path";
import { adminRouter } from "./routes/adminRoutes";
import { shopRouter } from "./routes/shopRoutes";

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Public directory
export const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.use("/admin", adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(publicPath, "./views/404.html"));
});

app.listen(process.env.PORT || 4000, () => {
  console.log(process.env.PORT);
  console.log("Server running in port " + process.env.PORT);
});
