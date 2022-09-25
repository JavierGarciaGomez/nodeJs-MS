import fs from "fs";
import http, { IncomingMessage, ServerResponse } from "http";

export const requestHandler = (req: IncomingMessage, res: ServerResponse) => {
  const { url, method, headers } = req;
  // console.log({ url, method });

  // 30
  if (url === "/hello" && method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
        <head><title>Enter Message</title></head>
        <body><h1>Hello</h1></body>
        </html>`);
    return res.end();
  }

  if (url === "/form" && method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
        <head><title>FORM</title></head>
        <body><form action="/hello" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>
        </html>`);
    return res.end();
  }

  if (url === "/hello" && method === "POST") {
    const body: any = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log({ body, parsedBody, message });
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
        <h1>Welcome</h1>
        <head><title>FORM</title></head>
        <body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>
            
        </html>`);
    return res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
        <ul>
        <li>User 1</li>
        <li>User 2</li>
        </ul>
        </html>`);
    return res.end();
  }

  if (url === "/create-user") {
    const body: any = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log({ parsedBody });
      const message = parsedBody.split("=")[1];
      console.log({ message });
    });
    res.statusCode = 302;
    res.setHeader("Location", "/users");
    return res.end();
  }
};
