import e from "express";
import { configDotenv } from "dotenv";
configDotenv();

const app = e();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.status(200).json({ msg: "Hello from test repo" });
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));