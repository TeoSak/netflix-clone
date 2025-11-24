import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model("User", userSchema);


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));



// Sign Up
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hashedPassword });

        res.status(201).json({
            message: "User created",
            user: { name: newUser.name, email: newUser.email, id: newUser._id }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

// Login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.json({
            message: "Login successful",
            token,
            user: { name: user.name, email: user.email, id: user._id }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});




app.get("/movies/:category", async (req, res) => {
    const category = req.params.category || "now_playing";

    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
            {
                headers: { Authorization: `Bearer ${process.env.TMDB_TOKEN}` }
            }
        );
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch movies" });
    }
});

app.get("/movie/:id/videos", async (req, res) => {
    const { id } = req.params;

    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
            {
                headers: { Authorization: `Bearer ${process.env.TMDB_TOKEN}` }
            }
        );
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch videos" });
    }
});

// ------------------ Start Server ------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
