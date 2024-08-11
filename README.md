# Backend Challenge

## Descrição

Este projeto é uma aplicação back-end desenvolvida em [NestJS](https://nestjs.com/) que implementa um CRUD de usuários e tarefas, utilizando PostgreSQL para o armazenamento de dados, Kafka para o gerenciamento de eventos, Redis como cache, e Swagger para a documentação da API. O projeto foi containerizado utilizando Docker, com orquestração dos contêineres realizada pelo Docker Compose.

### Funcionalidades Principais
- **CRUD de Usuários**: Criação, leitura, atualização e exclusão de usuários.
- **CRUD de Tarefas**: Criação, leitura, atualização e exclusão de tarefas.
- **Kafka**: Produção e consumo de eventos utilizando Kafka.
- **Redis**: Cache de dados utilizando Redis.
- **Swagger**: Documentação interativa da API utilizando Swagger.
- **Docker**: Aplicação totalmente containerizada, facilitando o deploy e a escalabilidade.

## Estrutura do Projeto

A estrutura do projeto é organizada de forma modular, seguindo as melhores práticas de desenvolvimento em NestJS:

src/ = Módulo principal.

src/users = Módulo de usuários. 
src/users/dto = Data Transfer Objects (DTOs).
src/users/entities = Entidades representando as tabelas do banco de dados.
src/users/users.controller.ts = Controlador dos usuários.
src/users/users.service.ts = Serviço dos usuários.

src/tasks = Módulo de tarefas.
src/tasks/dto = Data Transfer Objects (DTOs).
src/tasks/entities = Entidades representando as tabelas do banco de dados.
src/tasks/tasks.controller.ts = Controlador das tarefas.
src/tasks/tasks.service.ts = Serviço das tarefas.

src/kafka = Módulo para integração com Kafka.

src/redis = Módulo para integração com Redis.

src/app.module.ts = Módulo principal da aplicação.

src/main.ts = Ponto de entrada da aplicação.

## Pré-requisitos

Antes de iniciar, certifique-se de ter o seguinte instalado em sua máquina:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) (recomendado: versão 18.x)
- [NestJS CLI](https://docs.nestjs.com/cli/overview) (opcional, mas útil para desenvolvimento local)

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/PiresRenan/backend-challenge.git
   cd backend-challenge
   ```


2. **Configure as variáveis de ambiente:**
   Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis:
    ```
    DB_TYPE=postgres
    PG_HOST=db
    PG_PORT=5432
    PG_USER=postgres
    PG_PASSWORD=postgres
    PG_DB=postgres
    KAFKA_BROKERS=kafka:9092
    REDIS_HOST=redis
    REDIS_PORT=6379
    ```

3. **Construção dos contêineres Docker:**
Construa e inicialize os contêineres Docker utilizando o Docker Compose:
   ``` bash
   docker-compose up --build
   ```
   Este comando irá baixar as imagens necessárias, construir o contêiner da aplicação e iniciar todos os serviços (PostgreSQL, Kafka, Redis, etc).


4. **Acesse a aplicação:**
   Após a inicialização, a aplicação estará disponível em:
   API: `http://localhost:3000`

   Swagger Documentation: `http://localhost:3000/api`

## USO
**Endpoints Principais:**
Abaixo estão alguns dos principais endpoints da API:

***Usuários***

``GET /users:`` Retorna todos os usuários;

``POST /users:`` Cria um novo usuário;

``GET /users/:id:`` Retorna um usuário pelo ID;

``PUT /users/:id:`` Atualiza um usuário pelo ID;

``DELETE /users/:id:`` Deleta um usuário pelo ID;

***Tarefas***

``GET /tasks:`` Retorna todas as tarefas

``POST /tasks:`` Cria uma nova tarefa

``GET /tasks/:id:`` Retorna uma tarefa pelo ID

``PUT /tasks/:id:`` Atualiza uma tarefa pelo ID

``DELETE /tasks/:id:`` Deleta uma tarefa pelo ID
##

***Kafka e Redis***

A aplicação produz e consome eventos Kafka para o gerenciamento de tarefas.
O Redis é utilizado para cachear informações de usuários e tarefas.

##

***Documentação***

A documentação Swagger está disponível em http://localhost:3000/api e permite que você visualize e interaja com a API diretamente pelo navegador.


## Licença
Este projeto está licenciado sob a MIT License.

## Contato
Para dúvidas ou suporte, entre em contato em `renan.sp.121@hotmail.com`
## 

***Este `README.md` cobre todos os aspectos relevantes da aplicação e orienta os desenvolvedores sob***