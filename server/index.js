import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/connectDB.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


app.get("/", (req, res) => {
    res.json({
        message: "Hello from TlantPilot server"
    });
});

app.listen(port, () => {
    console.log(`TlantPilot server listening on port ${port}`);
    connectDB();
});