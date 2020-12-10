import { timeStamp } from "console";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class OrderDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userID: number;

  @Column()
  price: number;

  @Column({ length: 100 })
  itemName: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
