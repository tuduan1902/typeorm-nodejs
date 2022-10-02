import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Client } from "./Client";

export enum TransactionTypes {
   DEPOSIT = 'desposit',
   WITHDRAW = 'withdraw'
}

@Entity("transactions")
export class Transaction extends BaseEntity {

   @PrimaryGeneratedColumn()
   id: number;

   @Column({
      type: "enum",
      enum: TransactionTypes
   })
   type: string;

   @Column({
      type: "numeric"
   })
   amount: number;

   @ManyToOne(
      () => Client,
      client => client.transactions
   )
   @JoinColumn({
      name: 'client_id'
   })
   client: Client


}