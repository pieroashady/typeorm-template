import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Cart {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  totalAmount: number;

  @Column()
  userId: number;

  @Column()
  productId: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
