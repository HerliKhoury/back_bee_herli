import  Express  from "express";
import "express-async-errors";
import { errorHandler } from "./errors/errorHandler.error";


const app = Express();

app.use(Express.json());
/* app.use("/user", userRoutes);
app.use("/login", loginRoutes);
app.use("/imovel", imovelRoutes);
*/

app.use(errorHandler);

export default app;