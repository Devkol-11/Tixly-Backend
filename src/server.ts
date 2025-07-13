import http from "http";
// import { testDbConnection } from "./utils/testDB";

const PORT = 3000;

const server = http.createServer();

function start() {
  console.log("starting server...");
  server.listen(PORT, () => {
    console.log(`server started and listening on ${PORT}...`);
  });
}
// testDbConnection();
start();

function shutdown() {
  console.log("server shutting down..");
  server.close(() => {
    console.log("shuting down server...");
    process.exit(1);
  });
}

function unhandledRejection(err: any) {
  console.log(`Unhandled rejection error : ${err}`);
  process.exit(1);
}

function uncaughtException(err: any) {
  console.log(` Uncaught exception error : ${err}`);
  process.exit(1);
}

process.on("unhandledRejection", unhandledRejection);
process.on("uncaughtException", uncaughtException);
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
