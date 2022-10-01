// entities: Create table in database
import {Entity, Column, CreateDateColumn, UpdateDateColumn} from "typeorm"
import { Person } from "./utils/Person";

@Entity('client')
export class Client extends Person {
   
   @Column({
      type: "numeric"
   })
   balance: number;

   @Column({
      default: true,
      name: "active"
   })
   is_active: boolean;

   @Column({
      type: "simple-json",
      nullable: true // not provide info 
   }) 
   additional_info: {
      age: number,
      hair_color: string
   }

   @Column({
      type: "simple-array",
      default: []
   })
   family_members: string[]

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;
}
