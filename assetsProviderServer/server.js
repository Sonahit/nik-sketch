const server = require("./app");
const config = require("./config");

server.listen(config.port, () => {
  console.log(`Started assets server at port ${config.port}`);
});
