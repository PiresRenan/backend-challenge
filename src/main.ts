import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuracao do Swagger para documentação da API
  const config = new DocumentBuilder()
    .setTitle('Usuarios e Tarefas')
    .setDescription('API para manipulacao de usuarios e tarefas')
    .setVersion('1.0')
    .addTag('users')
    .addTag('tasks')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Inicia a aplicação na porta 3000
  await app.listen(3000);
}
bootstrap();
