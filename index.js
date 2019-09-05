require('dotenv').config();//must come before anything else

const server = require('./api/server.js');
const defaults = require('./config/defualt')

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
