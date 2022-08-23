import http, { IncomingMessage, ServerResponse } from "http";
import { requestHandler } from "./routes";

// const rqListener: http.RequestListener = (
//   req: IncomingMessage,
//   res: ServerResponse
// ) => {};

const server = http.createServer(requestHandler);

server.listen(3000, () => {
  console.log("listening");
});
