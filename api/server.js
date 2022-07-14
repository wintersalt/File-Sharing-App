const cookieParser = require("cookie-parser");
const authRouter = require("./routes/AuthRoutes.js");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

dotenv.config();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser({ httpOnly: true, secure: false }));
app.use("/api", authRouter)

app.listen(3001, () => {
  console.log("Server is runningon port:3001");
});
