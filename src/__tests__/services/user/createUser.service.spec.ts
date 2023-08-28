import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import request from "supertest";
import app from "../../../app";

describe("Testes: /user - POST", () => {
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

    test("Cria um usuário com sucesso", async () => {
        const userData ={
            name: "Lord Dain",
	        email: "Dain@gmail.com",
	        phone: "(62) 97361-2738",
	        password: "My hog"
        }

        const response = await request(app)
        .post('/user')
        .send(userData);

        expect(response.status).toBe(201);
        expect(response.body).toEqual({
            id: expect.any(Number),
            name: userData.name,
	        email: userData.email,
	        phone: userData.phone,
        });

    });

    test("Não cria usuário com email repetido", async () => {
        const userData ={
            name: "Dain",
	        email: "Dain@gmail.com",
	        phone: "(62) 76561-2738",
	        password: "hog"
        }

        const response = await request(app)
        .post('/user')
        .send(userData);

        expect(response.status).toBe(409);
        expect(response.body).toEqual({
            message: "Email já cadastrado"
        });

    });

});