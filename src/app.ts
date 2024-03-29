import  Express  from "express";
import "express-async-errors";
import { errorHandler } from "./errors/errorHandler.error";
import { propertyRoutes } from "./routes/property.routes";
import { userRoutes } from "./routes/user.routes";
import { loginRoutes } from "./routes/login.routes";
import dotenv from "dotenv";
import { healthRoutes } from "./routes/health.routes";

dotenv.config();

const app = Express();

app.use(Express.json());

const cors = require('cors');
const corsOptions ={
    origin:"*",
    credentials:true,            
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

app.use("/login", loginRoutes);
app.use("/user", userRoutes);
app.use("/property", propertyRoutes);
app.use("/health", healthRoutes);

app.use(errorHandler);

export default app;