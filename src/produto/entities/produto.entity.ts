import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 150, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 150, nullable: false })
  fabricante: string;

  @IsNotEmpty()
  @UpdateDateColumn()
  validade: Date;

  @IsNotEmpty()
  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  preço: number;

  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;
}
