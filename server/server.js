// server/index.js
import express from 'express';
import cors from 'cors';

const app = express();

// Enable CORS for Vite dev server
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// Handle both prefixed and non-prefixed routes
app.get(['/message', '/api/message'], (req, res) => {
  res.json({ 
    status: 'success',
    message: 'This works for both direct and proxied requests',
    path: req.path
  });
});


// Serve static files from React in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/dist'));
  app.get('*/splat', (req, res) => {
    res.sendFile(path.resolve('../client/dist/index.html'));
  });
}



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server is listening ")
})