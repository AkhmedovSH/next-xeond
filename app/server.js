const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Middleware для обработки MIME-типа
  server.use('/_next/static/chunks/', (req, res, next) => {
    res.setHeader('Content-Type', 'application/javascript');
    next();
  });

  // Обработка остальных запросов
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});