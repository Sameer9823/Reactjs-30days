import express from "express";
import cors from "cors";

import userRoutes from "./src/routes/user.routes.js";

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use("/api/v1", userRoutes);

// 404 handler for undefined routes
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// Generic error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

export default app;
