// server.js
const express = require('express');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Create a JSON Server
const server = jsonServer.create();

// Load db.json
const router = jsonServer.router('db.json');

// Middlewares
const middlewares = jsonServer.defaults();

// Use default middlewares (logger, static, cors)
server.use(middlewares);

// Use router
server.use(router);

// Reset password endpoint
app.post('/reset-password', (req, res) => {
  // Password reset logic here
});

// Function to send password reset email
function sendPasswordResetEmail(email, resetToken) {
  // Email sending logic here
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
