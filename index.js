const PORT = 3000;
const express = require("express");
const dotenv = require("dotenv");
const server = express();

dotenv.config();

const morgan = require("morgan");
server.use(morgan("dev"));

server.use(express.json());

const { client } = require("./db");

client.connect();

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
