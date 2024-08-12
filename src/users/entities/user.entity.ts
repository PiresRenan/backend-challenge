import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
// Esta entidade define a estrutura de dados do usuário.
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}