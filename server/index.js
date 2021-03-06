import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import Routes from "./routes/route.js";

dotenv.config();

const app = express();

const PORT = 8000;

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Routes);
