const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
const DEFAULT_PORT = 3000;

// See Handlebars templates in views/
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

// Make sure we get something that looks like a mimeType
function isMimeType(mimeType) {
  return mimeType && /[^/]+\/.+/.test(mimeType);
}

app.get('/mime/*', (request, response) => {
  const mimeType = request.params[0];

  if(!isMimeType(mimeType)) {
    return response.status(400);
  }

  // Use whatever mime type we're given on the route and
  // send an empty buffer back of that type.
  response.set('Content-Type', mimeType);
  response.send(Buffer.alloc(0));
});

// Expect to get a mime type on the query string: ?mimeType=text/plain
app.get('/', (request, response) => {
    const mimeType = request.query.mimeType;

    if(!isMimeType(mimeType)) {
      return response.status(400);
    }

    response.render('mime', { mimeType });
});

// Handlebars templates, and static JS for browser are all in views/
app.use(express.static('views/public/'));

let server;

function start(port = DEFAULT_PORT) {
  server = app.listen(port, (err) => {
    if (err) {
      throw err;
    }
  });
  
  return port;
}

function stop() {
  server.close();
}

module.exports.start = start;
module.exports.stop = stop;
