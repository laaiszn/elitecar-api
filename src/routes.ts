import { Router } from "express"; //Importa o modulo Router do express
import type { Request, Response } from "express"; //Importa os modulos de requisição e respota

const router = Router(); //Cria uma nova instancia de Router

router.get("/api", (req: Request, res: Response) => {
res.status(200).json({messagem: "Olá, seja bem-vindo"});
});

export {router};