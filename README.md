# API de Gestão de Produtos, Fornecedores e Usuários
API RESTful desenvolvida para a disciplina de Projeto Integrado IV do curso de Análise e Desenvolvimento de Sistemas da Universidade Federal do Cariri (UFCA). O objetivo principal desta API é fornecer um sistema para gerenciar um catálogo de produtos, usuários e fornecedores, permitindo operações de criação, leitura atualização e exclusão (CRUD).

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução do JavaScript no servidor.  
- **Express.js**: Framework para a construção da API.  
- **Nodemon**: Utilitário para reiniciar o serviro automaticamente durante o desenvolvimento. 

---

## 🚀 Instalação e execução

**Pré-requisitos:**
-  [Git](https://git-scm.com/)
-  [Node.js](https://nodejs.org/en/)
-  Um gerenciador de pacotes como [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
Além disso, é bom ter um cliente de API como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/) para realizar os testes.


1. **Clone o repositório e acesse a pasta do projeto no terminal/cmd**
```bash
git clone https://github.com/geanio-rodrigues/api-supermercado
cd api-supermercado
```

2. **instale as dependências**
```bash
npm install
```

3. **Execute a aplicação em modo de desenvolvimento**
-  O servidor inciará na porta 3000 - acesse http://localhost:3000
```bash
npm start
```

---

## 📖 Documentação API
A documentação completa e interativa da API foi gerada por Swagger e está disponível para consulta e testes.
Após iniciar o serviro, acesse a documentação através da seguinte URL no seu navegador:
➡️ [http://localhost:3000/docs](http://localhost:3000/docs)

---

## Endpoints da API

**Produtos:**

-    **GET /api/products** → lista todos os produtos
-    **GET /api/products/{id}** → obtém um produto específico
-    **POST /api/products** → cria um novo produto
-    **PUT /api/products/{id}** → atualiza um produto
-    **DELETE /api/products/{id}** → remove um produto
  
**Fornecedores:**

-    **GET /api/suppliers** → lista todos os fornecedores
-    **GET /api/suppliers/{id}** → obtém um fornecedor específico
-    **POST /api/suppliers** → cria um novo fornecedor
-    **PUT /api/suppliers/{id}** → atualiza um fornecedor
-    **DELETE /api/suppliers/{id}** → remove um fornecedor
   
**Usuários:**

-    **GET /api/users** → lista todos os usuários
-    **POST /api/register** → cria um novo usuário
-    **POST /api/login** → loga um usuário na aplicação
  
---

## 💡 Possíveis usos da nossa API
Esta API, embora desenvolvida em um contexto acadêmico, foi projetada para ser flexível e últil em cenários do mundo real. Abaixo, descrevemos como ela poderia ajudar uma pessou ou um negócio.

**Cenário de Uso: Um pequeno supermercado de bairro**
Imagine o dono de um supermercado de bairro que gerencia centenas de produtos, desde mercearia e laticínios até hortifútri e produtos de limpeza. Atualmente, o controle de preços é feito com etiquetas de gôndola impressas e estoque é verificado manualmente em cadernos ou planilhas. Com a chegada de novas mercadorias a necessidade de ajustar preços constantemente, esse processo manual é lento, suscetível a erros e dificulta a ciaraçãod e promoções rápidas.
A nossa API de Gestão poderia ser a base para modernizar e solucionar esse problema. Ela poderia ser integrada a:

1. **Sistema de Ponto de Venda(PDV) no Caixa:** Em vez de digitar os preços manualmente, o operador de caixa poderia simplesmente escanear o código de barras do produto. O sistema de caixa faria uma chamada à API `GET /produtos/:id` para buscar o preço atualizado em tempo real. Se o dono precisar alterar o preço do arroz, ele altera uma única vez e através de um painel administrativo `PUT /produtos/:id`, e todos os caixas já cobrarão o valor correto instantaneamente.
2. **Um Encarte Digital de Ofertas:** Em vez de gastar com a impressão de folhetos, o supermercado poderia ter um site ou um aplicativo simples. Este canal consumiria a API `GET /produtos` para exibir uma lista sempre atualizada com as promoções da semana. Isso permite que o comerciante crie ofertas relâmpago e as divulgue para os clientes do bairro de forma imediata.
3. **Um Assistente de Compras por WhatsApp:** Um chatbox poderia ser configurado para ajudar os cliente. Alguém poderia enviar uma mensagem perguntando: "Tem detergente da marca Y?" ou "Qual o precço do quilo do tomate hoje?". O bot consultaria a API em tempo real e responderia com a disponibilidade e o preço exato, melhorando o atendimento e incentivando o cliente a ir até a loja.

---

## Autores
-  **[Geanio Rodrigues](https://github.com/geanio-rodrigues)**
-  **[Alisson Queiroz](https://github.com/AlissonQueirozDantas)**
-  **[Michelle Oliveira](https://github.com/michellelima8)**