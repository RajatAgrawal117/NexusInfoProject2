const express = require("express");
require("dotenv").config();
const cors = require("cors");
const db = require("./config/database");
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// CORS Configuration
app.use(cors({
    origin: "*", // Specify your frontend's origin
    credentials: true, // Allow cookies to be sent with requests
}));

// Database connection
db.connectDB();

// Routes
app.use("/api/auth", userRoutes);

// CORS Headers for Preflight Requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Adjust this if you have specific origins
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
