const express = require('express');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('website'));

app.get('/config.js', (req, res) => {
  res.type('application/javascript');
  res.send(`window.DIFY_APP_ID = "${process.env.DIFY_APP_ID || ''}";\nwindow.DIFY_API_KEY = "${process.env.DIFY_API_KEY || ''}";`);
});

app.listen(port, () => {
  console.log(`ChatCV server running at http://localhost:${port}`);
});
