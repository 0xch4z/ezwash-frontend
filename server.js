const express = require('express');
const next = require('next');
const compression = require('compression');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {

	const server = express();
	
	server.use(compression());
	server.use('static', express.static('static'));

  // mount next views
  server.all('*', (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) {
      throw err;
    }
    console.log(`Client listening on ${port}`);
  });

}).catch((err) => {
  console.error(err);
});
