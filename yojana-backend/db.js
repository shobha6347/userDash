// const mysql = require('mysql2');
// const dotenv = require('dotenv');

// dotenv.config(); // Load environment variables

// const db = mysql.createConnection({
//     host: process.env.DB_HOST || 'localhost',
//     user: process.env.DB_USER || 'root',
//     password: process.env.DB_PASS || '',
//     database: process.env.DB_NAME || 'governmentscheme'
// });

// db.connect(err => {
//     if (err) {
//         console.error('❌ Database connection failed:', err.message);
//         process.exit(1);
//     }
//     console.log('✅ Connected to MySQL database.');
// });

// module.exports = db;



// backend/db.js

const mysql = require('mysql2');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Create the MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'governmentscheme',
    multipleStatements: true // Optional: Useful for running SQL seeds with multiple statements
});

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('❌ Database connection failed:', err.message);
        process.exit(1);
    } else {
        console.log('✅ Connected to MySQL database.');
    }
});

module.exports = db;
