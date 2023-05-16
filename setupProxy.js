const { createProxyMiddleware } = require('http-proxy-middleware');
const fs = require('fs');

const cert = fs.readFileSync('./cert.pem', 'utf8');
const key = fs.readFileSync('./key.pem', 'utf8');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://localhost:3010',
      secure: false,
      changeOrigin: true,
      https: { key, cert }
    })
  );
};
