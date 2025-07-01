require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const documentRoutes = require('./routes/documentRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // to serve uploaded files

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/docs', documentRoutes);

// MongoDB connection and server start
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`✅ Server running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection failed:', err.message);
  });
