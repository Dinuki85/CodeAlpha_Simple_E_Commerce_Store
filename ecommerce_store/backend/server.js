const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

//Database Connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true,useUnifiedTopology: trur})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

app.listen(5000, () => console.log("Server running on port 5000"));
