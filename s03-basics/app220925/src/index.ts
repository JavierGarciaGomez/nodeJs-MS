// import { requestHandler } from "./routes";
import http, { IncomingMessage, Server, ServerResponse } from "http";
import { requestHandler } from "./routes";

// const requestListener = (req: IncomingMessage, res: ServerResponse) => {
//   console.log({ url: req.url, method: req.method, headers: req.headers });
//   res.setHeader("Content-Type", "text/html");
//   console.log({ res });

//   res.write(`<html>
//   <head><title>Enter Message</title></head>
//   <body><h1>Hello</h1></body>
//   </html>`);
//   return res.end();
// };

const server: Server = http.createServer(requestHandler);

server.listen(3000, () => {
  console.log("Listening");
});
