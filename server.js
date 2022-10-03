//entry point
const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const article = require('./routes/api/article');

const app = express();
// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use('/api/article', article);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log('🙌Hey'+` Server running on port ${port}`+'✌'));