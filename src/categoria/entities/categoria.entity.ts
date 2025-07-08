import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Produto } from '../../produto/entities/produto.entity';

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

  @OneToMany(() => Produto, (produto) => produto.categoria, {
    onDelete: 'CASCADE',
  })
  produto: Produto;
}
