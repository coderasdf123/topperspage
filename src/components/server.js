const express = require('express');
const { WebSocketServer } = require('ws'); // Use WebSocketServer instead of ws
const cors = require('cors');
const http = require('http'); // Required to create an HTTP server

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory store for comments (replace with a database in production)
let comments = [];

// API Endpoints
app.get('/api/comments', (req, res) => {
  res.json(comments);
});

app.post('/api/comments', (req, res) => {
  const newComment = req.body;
  comments = [newComment, ...comments];
  broadcast({ type: 'comments', payload: comments });
  res.json(comments);
});

app.post('/api/comments/:id/like', (req, res) => {
  const { id } = req.params;
  comments = comments.map(comment =>
    comment.id === id ? { ...comment, likes: (comment.likes || 0) + 1 } : comment
  );
  broadcast({ type: 'comments', payload: comments });
  res.json(comments);
});

app.post('/api/comments/:id/view', (req, res) => {
  const { id } = req.params;
  comments = comments.map(comment =>
    comment.id === id ? { ...comment, views: (comment.views || 0) + 1 } : comment
  );
  broadcast({ type: 'comments', payload: comments });
  res.json(comments);
});

// Create an HTTP server with Express
const server = http.createServer(app);

// WebSocket Server attached to the HTTP server
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.send(JSON.stringify({ type: 'comments', payload: comments }));

  ws.on('message', (message) => {
    const data = JSON.parse(message);
    if (data.type === 'newComment') {
      comments = [data.payload, ...comments];
      broadcast({ type: 'comments', payload: comments });
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Broadcast to all connected clients
function broadcast(data) {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
}

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});