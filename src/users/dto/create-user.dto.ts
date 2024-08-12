import { IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
// Este DTO (Data Transfer Object) define os dados necessários para criar um novo usuário.
export class CreateUserDto {
  @ApiProperty({ description: 'Nome dado ao usuario.', example: "Renan" })
  @IsString()
  name: string;
  @ApiProperty({ description: 'Email relacionado ao usuario.', example: "Renan@email.com" })
  @IsEmail()
  email: string;
  @ApiProperty({ description: 'Senha relacionado ao usuario.', example: "Abc123@" })
  @IsString()
  password: string;
}
