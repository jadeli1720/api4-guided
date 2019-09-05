const server = require('./api/server.js');
require('dotenv').config()

const port = process.env.NODE_ENV;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
