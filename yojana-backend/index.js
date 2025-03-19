


// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const db = require("./db"); // Use the imported database connection

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Helper function to run MySQL queries
// const runQuery = (query, params = []) => {
//     return new Promise((resolve, reject) => {
//         db.query(query, params, (err, results) => {
//             if (err) {
//                 console.error("❌ Database query error:", err);
//                 reject(err);
//             } else {
//                 resolve(results);
//             }
//         });
//     });
// };

// // Root route for API status check
// app.get("/", (req, res) => {
//     res.json({ message: "✅ API is running" });
// });

// // Fetch all categories
// app.get("/getCategory", async (req, res) => {
//     try {
//         console.log("Fetching categories...");
//         const categories = await runQuery("SELECT * FROM tbl_category");
//         res.status(200).json({ success: true, data: categories });
//     } catch (err) {
//         console.error("Error fetching categories:", err);
//         res.status(500).json({ success: false, error: err.message });
//     }
// });

// // Fetch all subcategories
// app.get("/getSubCategory", async (req, res) => {
//     try {
//         console.log("Fetching subcategories...");
//         const subCategories = await runQuery("SELECT * FROM tbl_sub_category");
//         res.status(200).json({ success: true, data: subCategories });
//     } catch (err) {
//         console.error("Error fetching subcategories:", err);
//         res.status(500).json({ success: false, error: err.message });
//     }
// });

// // Fetch all yojana types
// app.get("/getYojanaType", async (req, res) => {
//     try {
//         console.log("Fetching yojana types...");
//         const yojanaTypes = await runQuery("SELECT * FROM tbl_yojana_type");
//         res.status(200).json({ success: true, data: yojanaTypes });
//     } catch (err) {
//         console.error("Error fetching yojana types:", err);
//         res.status(500).json({ success: false, error: err.message });
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`🚀 Server running on port ${PORT}`);
// });


const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./db"); // Database connection

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Helper function to run MySQL queries
const runQuery = (query, params = []) => {
    return new Promise((resolve, reject) => {
        db.query(query, params, (err, results) => {
            if (err) {
                console.error("❌ Database query error:", err);
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

// Root route for API status check
app.get("/", (req, res) => {
    res.json({ message: "✅ API is running" });
});

// Fetch all categories
app.get("/getCategory", async (req, res) => {
    try {
        console.log("Fetching categories...");
        const categories = await runQuery("SELECT * FROM tbl_category");
        res.status(200).json({ success: true, data: categories });
    } catch (err) {
        console.error("Error fetching categories:", err);
        res.status(500).json({ success: false, error: err.message });
    }
});

// Fetch all subcategories (Corrected API name)
app.get("/getSubCategory", async (req, res) => {
    try {
        console.log("Fetching subcategories...");
        const subCategories = await runQuery("SELECT * FROM tbl_sub_category");
        res.status(200).json({ success: true, data: subCategories });
    } catch (err) {
        console.error("Error fetching subcategories:", err);
        res.status(500).json({ success: false, error: err.message });
    }
});

// Fetch all yojana types (Corrected API name)
app.get("/getYojanaType", async (req, res) => {
    try {
        console.log("Fetching yojana types...");
        const yojanaTypes = await runQuery("SELECT * FROM tbl_yojana_type");
        res.status(200).json({ success: true, data: yojanaTypes });
    } catch (err) {
        console.error("Error fetching yojana types:", err);
        res.status(500).json({ success: false, error: err.message });
    }
});

// Start the server
// Start the server only if not in a Vercel environment
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
}

// Export the app for Vercel
module.exports = app;
