import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
}
app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get('/home', (req, res) => {
    res.status(200).json({
        message: "I am coming from backend",
        success: true
    })
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})