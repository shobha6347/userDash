<<<<<<< HEAD
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const db = require("./db"); // Database connection

dotenv.config();

const app = express();

// Configure CORS properly
app.use(cors({
    origin: 'http://localhost:5175', // Your frontend URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Create uploads folder if it doesn't exist
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    },
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only JPEG, PNG and PDF files are allowed.'));
        }
    }
});

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

// Fetch all subcategories
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

// Fetch all yojana types
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

// ✅ Fetch all Yojana Years with correct column names
app.get("/getYojanaYears", async (req, res) => {
    try {
        console.log("Fetching yojana years...");
        const years = await runQuery("SELECT yojana_year_id AS id, yojana_year AS year FROM tbl_yojana_year");
        res.status(200).json({ success: true, data: years });
    } catch (err) {
        console.error("Error fetching yojana years:", err);
        res.status(500).json({ success: false, error: err.message });
    }
});

// Handle application submissions with document uploads
app.post("/submitApplication", upload.fields([
    { name: 'aadharCard', maxCount: 1 },
    { name: 'bankPassbook', maxCount: 1 },
    { name: 'casteCertificate', maxCount: 1 },
    { name: 'incomeCertificate', maxCount: 1 }
]), async (req, res) => {
    try {
        const {
            aadhar, surname, firstName, fatherName, beneficiaryType,
            category, subCategory, yojnaType, bankName, ifsc,
            accountNo, amountPaid, mobileNumber, chooseYear
        } = req.body;

        // Validate required fields
        if (!aadhar || !surname || !firstName || !fatherName || !mobileNumber) {
            return res.status(400).json({ success: false, message: "Required fields are missing" });
        }

        // Insert into applications table
        const applicationQuery = `
            INSERT INTO applications 
            (aadhar, surname, first_name, father_name, mobilenumber, 
             beneficiary_type, category_id, subcategory_id, yojana_type, 
             bank_name, ifsc_code, account_no, amount_paid, years)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const applicationValues = [
            aadhar, surname, firstName, fatherName, mobileNumber,
            beneficiaryType, category, subCategory, yojnaType,
            bankName, ifsc, accountNo, amountPaid, chooseYear
        ];
        const result = await runQuery(applicationQuery, applicationValues);
        const applicationId = result.insertId;

        // Insert uploaded document file paths
        const documentTypes = {
            'aadharCard': 'Aadhar Card',
            'bankPassbook': 'Bank Passbook',
            'casteCertificate': 'Caste Certificate',
            'incomeCertificate': 'Income Certificate'
        };

        for (const [fieldName, files] of Object.entries(req.files || {})) {
            if (files?.[0]) {
                const filePath = `/uploads/${files[0].filename}`;
                const documentQuery = `
                    INSERT INTO documents (application_id, document_type, file_path)
                    VALUES (?, ?, ?)
                `;
                await runQuery(documentQuery, [applicationId, documentTypes[fieldName], filePath]);
            }
        }

        res.status(200).json({ success: true, message: "Application submitted successfully" });
    } catch (err) {
        console.error("Error submitting application:", err);
        res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
});

// Get application documents
app.get("/getApplicationDocuments/:applicationId", async (req, res) => {
    try {
        const { applicationId } = req.params;
        const query = `
            SELECT d.*, a.aadhar, a.first_name, a.surname
            FROM documents d
            JOIN applications a ON d.application_id = a.id
            WHERE d.application_id = ?
        `;
        const documents = await runQuery(query, [applicationId]);
        res.json({ success: true, data: documents });
    } catch (err) {
        console.error("Error fetching documents:", err);
        res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
}

// Export the app for Vercel
module.exports = app;
