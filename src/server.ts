import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
    .then(() => {
        app.listen(3001, () => {
            console.log("Servidor executando na porta 3001");
        });
    }).catch((error) => {
        console.error("Erro durante inicialização da base de dados", error);
    });