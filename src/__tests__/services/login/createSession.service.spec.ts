import { DataSource, Repository } from "typeorm";
import { AppDataSource } from "../../../data-source";
import { User } from "../../../entities/user.entity";
import app from "../../../app";
import request from "supertest";

describe("Testes: /login - POST", () => {
    let connection: DataSource;

    beforeAll(async () => {
        await AppDataSource.initialize()
        .then((res) => (connection = res))
        .catch((err) => {
            console.error("Erro ao iniciar fonte de dados", err);
        });
    });

    afterAll(async () => {
        await connection.destroy();
    });

    test("Loga usuário com sucesso", async () => {
        const userRepository = connection.getRepository(User);

        const userData = {
	        email: "Dain@gmail.com",
	        password: "My hog"
        }

        await userRepository.save(userData);

        const response = await request(app)
            .post('/login')
            .send({ email: userData.email, password: userData.password });

        expect(response.status).toBe(200);
        expect(response.body.token).toBeDefined();

    });

    test("Falha ao logar com Usuário inexistente", async () => {
        
        const response = await request(app)
            .post('/login')
            .send({ email: "Thorin@mail.com", password: "oakenshield" });

        expect(response.status).toBe(401);
        expect(response.body.message).toBe("Credênciais inválidas");

    });
});