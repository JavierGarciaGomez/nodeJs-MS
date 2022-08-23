import express, { NextFunction, Request, Response } from "express";
import path from "path";
import { adminRouter } from "./routes/adminRoutes";
import { shopRouter } from "./routes/shopRoutes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Public directory
export const publicPath = path.join(__dirname, "/public");
app.use(express.static(publicPath));
// app.use(bodyParser.urlencoded({ extended: false }));

// * BEFORE 63
// app.use((req: Request, res: Response, next: NextFunction) => {
//   console.log("im in the first middleware");
//   next();
// });

// app.use((req: Request, res: Response, next: NextFunction) => {
//   // res.send("Hello 2");
//   next();
// });

// app.use("/users", (req: Request, res: Response, next: NextFunction) => {
//   res.send("USERS");
// });
// app.use("/", (req: Request, res: Response, next: NextFunction) => {
//   res.send("HELLO");
// });

// 64
// app.use("/", (req: Request, res: Response, next: NextFunction) => {
//   console.log("THHIS ALWAYS RUN");
//   next();
// });
// app.use("/add-product", (req: Request, res: Response, next: NextFunction) => {
//   res.setHeader("Content-Type", "application/json");
//   res.send(
//     `<body><form action="/product" method="POST"><input type="text" name="title">
//     <button type="submit">SUBMIT</button></form></body>`
//   );
// });

// app.post("/product", (req: Request, res: Response, next: NextFunction) => {
//   console.log(req.body);
//   res.redirect("/");
// });

// app.use("/", (req: Request, res: Response, next: NextFunction) => {
//   res.send("<h1>HELLO</h1>");
//   next();
// });

app.use("/admin", adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(publicPath, "views/404.html"));
});

app.listen(process.env.PORT || 4000, () => {
  console.log(process.env.PORT);
  console.log("Server running in port " + process.env.PORT);
});
