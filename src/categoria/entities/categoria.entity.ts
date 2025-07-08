import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tb_categoria' })
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 500, nullable: false })
  tipo: string;

  @IsNotEmpty()
  @Column({ length: 5000, nullable: false })
  descricao: string;
}
