const server = require("./api/server.js");

const port = process.env.PORT || 6123;

server.listen(port, () => {
  console.log(`API Running on port ${port}`);
});
