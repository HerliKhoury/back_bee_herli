import  Express  from "express";
import "express-async-errors";
import { errorHandler } from "./errors/errorHandler.error";
import { propertyRoutes } from "./routes/property.routes";
import { userRoutes } from "./routes/user.routes";
import { loginRoutes } from "./routes/login.routes";


const app = Express();

app.use(Express.json());
app.use("/login", loginRoutes);
app.use("/user", userRoutes);
app.use("/property", propertyRoutes);


app.use(errorHandler);

export default app;