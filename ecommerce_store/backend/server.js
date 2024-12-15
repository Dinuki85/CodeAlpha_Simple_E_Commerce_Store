const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const app = express();
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

// Routes
app.use('/api/products', require('./routes/productRoute'));
app.use('/api/cart', require('./routes/cartRoute'));

app.listen(5000, () => console.log("Server running on port 5000"));
