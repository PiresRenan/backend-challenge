import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// Esta entidade define a estrutura de dados da tarefa.
@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  title: string;
  @Column()
  description: string;
}
