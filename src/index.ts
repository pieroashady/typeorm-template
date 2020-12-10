import "reflect-metadata";
import * as express from "express";
import * as cors from "cors";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";
import * as indexRouter from "./routes/index";
import * as productRouter from "./routes/product";
import * as categoryRouter from "./routes/category";
import * as session from "express-session";

const PORT = 3001;
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session());

app.use("/", indexRouter);
app.use("/product", productRouter);
app.use("/category", categoryRouter);

app.listen(PORT, () => console.log(`Running on port http://localhost:${PORT}`));

module.exports = app;
