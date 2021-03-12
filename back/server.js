import http from 'http';
import app from './app.js';
import path from 'path';

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

app.get('*', (req, res) => {
  res.sendFile(path.resolve('../front/build/index.html'));
});

server.listen(PORT);
