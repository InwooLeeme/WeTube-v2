
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

const PORT = 4000;

app.use(helmet(
    {
        contentSecurityPolicy: false,
    }
));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false}));

app.listen(PORT,() => console.log(`Server is Running on : ${PORT}`));