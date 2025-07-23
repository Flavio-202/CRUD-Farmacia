# 📦 FarmaHub (Projeto Acadêmico)

Este é um projeto **acadêmico** desenvolvido durante o bootcamp da Generation Brasil, sem fins comerciais.  
O objetivo é criar uma **API Rest** para gerenciar produtos e categorias de uma farmácia virtual.

---

## 🚀 Tecnologias utilizadas
- **NestJS** – framework Node.js para construção de APIs
- **TypeScript**
- **TypeORM** – para conexão e mapeamento com banco de dados MySQL
- **MySQL** – banco de dados relacional
- **Class-validator** – para validação dos dados
- **Insomnia** – para realizar testes das rotas HTTP

---

## 📂 Funcionalidades
- Cadastro, consulta, atualização e exclusão de **categorias**
- Cadastro, consulta, atualização e exclusão de **produtos**
- Relacionamento entre produtos e categorias
- Validação de dados

---

## ⚙️ Como rodar o projeto localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/)
- [Nest CLI](https://docs.nestjs.com/cli/overview):  
  ```bash
  npm install -g @nestjs/cli

Banco de dados MySQL instalado e rodando



---

Passo a passo

1. Clone o repositório



git clone https://github.com/Flavio-202/CRUD-Farmacia.git
cd CRUD-Farmacia

2. Instale as dependências



npm install

3. Configure o banco de dados



Crie um banco de dados chamado db_farmahub no MySQL

No projeto, confira se o arquivo app.module.ts está configurado com:


TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'db_farmahub',
  entities: [Produto, Categoria],
  synchronize: true,
}),

(Altere usuário e senha conforme seu ambiente)


---

4. Rode o projeto



npm run start

O servidor estará rodando em:

http://localhost:4000


---

✅ Testes

Use o Insomnia ou outro cliente REST para testar as rotas.
Você pode criar requisições de exemplo para:

GET, POST, PUT e DELETE de produtos

GET, POST, PUT e DELETE de categorias


(Você pode também compartilhar um print do Insomnia rodando no README ou no LinkedIn!)


---

📌 Observações

Este projeto foi desenvolvido apenas para fins educacionais.

Não está pronto para produção.

Desenvolvido durante o bootcamp Full Stack JavaScript da Generation Brasil.



---

📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.


---

👨‍💻 Desenvolvido por

Flavio Teixeira Aguilar da Silva


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>


