const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

dotenv.config();  // Load environment variables from .env

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;

app.use(cors());  // Allow CORS for your React app
app.use(express.json());  // Middleware to parse JSON requests

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
