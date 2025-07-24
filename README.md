<h1>📦 FarmaHub (Projeto Acadêmico)</h1>

<p>Projeto desenvolvido durante o bootcamp da Generation Brasil com objetivo de criar uma <strong>API Rest</strong> para gerenciar produtos e categorias de uma farmácia virtual, seguindo arquitetura <strong>MVC (Model-View-Controller)</strong> e utilizando <strong>TypeORM</strong> para acesso ao banco de dados relacional. O projeto também utiliza <strong>ESLint</strong> para manter a padronização e qualidade do código.</p>

<hr>

<h2>🚀 Tecnologias utilizadas</h2>

<p align="left">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeORM-FF5733?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"/>
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"/>
  <img src="https://img.shields.io/badge/Insomnia-4000BF?style=for-the-badge&logo=insomnia&logoColor=white"/>
</p>

<hr>

<h2>📂 Funcionalidades</h2>

<ul>
  <li>Cadastro, consulta, atualização e exclusão de <strong>categorias</strong></li>
  <li>Cadastro, consulta, atualização e exclusão de <strong>produtos</strong></li>
  <li>Relacionamento entre produtos e categorias</li>
  <li>Validação de dados</li>
</ul>

<hr>

<h2>⚙️ Pré-requisitos</h2>

<p>Antes de começar, certifique-se de ter instalado:</p>

<ul>
  <li><a href="https://nodejs.org/">Node.js</a> (recomendado: versão 18 ou superior)</li>
  <li><a href="https://www.npmjs.com/">npm</a></li>
  <li>Banco de dados: MySQL / PostgreSQL / SQLite</li>
</ul>

<hr>

<h2>📌 Passo a passo</h2>

<h3>1️⃣ Clone o repositório</h3>

<pre><code>git clone https://github.com/Flavio-202/CRUD-Farmacia.git
cd CRUD-Farmacia
</code></pre>

<hr>

<h3>2️⃣ Instale as dependências</h3>

<pre><code>npm install
</code></pre>

<hr>

<h3>3️⃣ Configure o banco de dados</h3>

<p>Crie um banco de dados chamado <code>db_farmahub</code></p>

<p>Verifique se o arquivo <code>app.module.ts</code> está configurado assim:</p>

<pre><code>TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'db_farmahub',
  entities: [Produto, Categoria],
  synchronize: true,
}),
</code></pre>

<p><em>(Altere usuário e senha conforme o seu ambiente)</em></p>

<hr>

<h3>4️⃣ Rode o projeto</h3>

<pre><code>npm run start:dev
</code></pre>

<p>O servidor estará disponível em:</p>

<pre><code>http://localhost:4000
</code></pre>

<hr>

<h2>🧪 Testes</h2>

<p>Use o <strong>Insomnia</strong> ou outro cliente REST para testar as rotas:</p>

<ul>
  <li><code>GET</code>, <code>POST</code>, <code>PUT</code> e <code>DELETE</code> de produtos</li>
  <li><code>GET</code>, <code>POST</code>, <code>PUT</code> e <code>DELETE</code> de categorias</li>
</ul>

<hr>

<h2>📌 Observações</h2>

<ul>
  <li>Este projeto foi desenvolvido apenas para fins educacionais.</li>
  <li>Desenvolvido durante o bootcamp <strong>Full Stack JavaScript</strong> da Generation Brasil.</li>
</ul>

<hr>

<h2>📄 Licença</h2>

<p>Este projeto está sob a licença UNLICENSED (projeto acadêmico ou privado).</p>

<hr>

<h2>👨‍💻 Desenvolvido por</h2>

<p><a href="https://www.linkedin.com/in/flavio-aguilar-477484237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
Flavio Aguilar</a></p>
