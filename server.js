const express = require("express");
const cors = require("cors");
const multer = require("multer");

const { analyzePresentation } =
    require("./analysis");


const app = express();

const PORT = 5000;


// Middleware

app.use(cors());

app.use(express.json());


// File upload

const upload = multer({
    dest: "uploads/"
});


// Home API

app.get("/", (req, res) => {

    res.json({
        message:
        "AI Student Presentation Analysis Backend is Running"
    });

});


// Login API

app.post("/api/login", (req, res) => {

    const { email, password } = req.body;


    if (!email || !password) {

        return res.status(400).json({
            success: false,
            message:
            "Email and password are required"
        });

    }


    res.json({

        success: true,

        message: "Login successful",

        user: {
            email: email
        }

    });

});


// Presentation Analysis API

app.post(
    "/api/analyze",
    upload.single("audio"),
    (req, res) => {

        if (!req.file) {

            return res.status(400).json({

                success: false,

                message:
                "Please upload an audio file"

            });

        }


        const result =
            analyzePresentation();


        res.json({

            success: true,

            message:
            "Presentation analyzed successfully",

            fileName:
            req.file.originalname,

            result: result

        });

    }
);


// Start server

app.listen(PORT, () => {

    console.log(
        `AI Presentation Backend running on http://localhost:${PORT}`
    );

});