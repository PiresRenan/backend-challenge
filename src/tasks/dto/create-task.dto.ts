import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
// Esta DTO (Data Transfer Object) define os dados necessários para criar uma nova tarefa.  
export class CreateTaskDto {
  @ApiProperty({ description: 'Titulo dado a uma tarefa.', example: "Comprar pão" })
  @IsString()
  title: string;
  @ApiProperty({ description: 'Descrição relacionado a tarefa.', example: "Ir no mercado 'Extra' na Rua Chico, 87, e comprar 4 pães à R$5,75." })
  @IsString()
  description: string;
}
