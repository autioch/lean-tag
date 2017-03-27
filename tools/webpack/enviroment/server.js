/* eslint no-magic-numbers: 0 */
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

function sendFile(response, file, filename) {
  if (filename.indexOf('.css') !== -1) {
    response.setHeader('content-type', 'text/css');
  }

  if (filename.indexOf('.svg') !== -1) {
    response.setHeader('content-type', 'image/svg+xml');
  }

  console.log(`${new Date().toTimeString().substr(0, 8)}  200  ${filename}`);
  response.writeHead(200);
  response.write(file, 'binary');
  response.end();
}

function sendError(response, code, filename) {
  console.log(`${new Date().toTimeString().substr(0, 8)}  ${code}  ${filename}`);
  response.writeHead(code, {
    'Content-Type': 'text/plain'
  });
  response.end();
}

/* Starts simple server for serving files during development. */
module.exports = function server(webpackConfig, setup) {
  http
    .createServer(function handleRequest(request, response) {
      const uri = url.parse(request.url).pathname;
      let filename = path.join(setup.buildFolder, uri);

      fs.exists(filename, function existCallback(exists) {
        if (!exists) {
          sendError(response, 404, uri);

          return;
        }
        if (fs.statSync(filename).isDirectory()) { // eslint-disable-line no-sync
          filename += '/index.html';
        }
        fs.readFile(filename, 'binary', function sendBinaryFile(err, file) {
          if (err) {
            sendError(response, 500, uri);
          } else {
            sendFile(response, file, uri);
          }
        });
      });
    })
    .listen(8080, () => console.log('Localhost   listening on: http://localhost:8080'));
};
