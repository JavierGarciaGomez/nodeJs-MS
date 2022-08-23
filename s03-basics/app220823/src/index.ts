import fs from "fs";
import http, { IncomingMessage, ServerResponse } from "http";

// const rqListener: http.RequestListener = (
//   req: IncomingMessage,
//   res: ServerResponse
// ) => {};

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const { url, method, headers } = req;
    console.log({ url, method, headers });

    // 30
    if (url === "/hello") {
      res.setHeader("Content-Type", "text/html");
      res.write(`<html>
        <head><title>Enter Message</title></head>
        <body><h1>Hello</h1></body>
        </html>`);
      return res.end();
    }
    if (url === "/form") {
      res.setHeader("Content-Type", "text/html");
      res.write(`<html>
        <head><title>Enter Message</title></head>
        <body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>
        </html>`);
      return res.end();
    }
  }
);

server.listen(3000, () => {
  console.log("listening");
});
