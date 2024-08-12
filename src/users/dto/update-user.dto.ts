import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
// Este DTO define os dados que podem ser atualizados em um usuário.
export class UpdateUserDto extends PartialType(CreateUserDto) {}