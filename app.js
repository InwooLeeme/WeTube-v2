
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import globalRouter from "./Router/globalRouter.js";
import userRouter from "./Router/userRouter.js";
import routes from "./router.js";
import vidoeRouter from "./Router/videoRouter.js";


const app = express();

app.use(helmet(
    {
        contentSecurityPolicy: false,
    }
));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, vidoeRouter);


export default app;