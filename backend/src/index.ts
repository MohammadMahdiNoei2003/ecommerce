import express, { Request, Response } from "express";
import { sampleProducts } from "./data";

const PORT = 5000;

const app = express();

app.get("/api/products", (req: Request, res: Response) => {
    res.json(sampleProducts)
})

app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
})