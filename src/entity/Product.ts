import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 36 })
  categoryId: string;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column({ type: "int", width: 200 })
  price: number;

  @Column({ type: "boolean" })
  isActive;

  @Column()
  stock: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
