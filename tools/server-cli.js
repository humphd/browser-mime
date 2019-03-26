const server = require('./server');

const port = server.start();
console.log(`http://localhost:${port}`);