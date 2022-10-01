// entities: Create table in database
import {Entity, BaseEntity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn} from "typeorm"

@Entity()
export class Person extends BaseEntity {
   @PrimaryColumn()
   id: number

   @Column()
   first_name: string;

   @Column()
   last_name: string;

   @Column()
   middle_name: string;

   @Column({
      unique: true // duy nhất 
   })
   email: string;

   @Column({
      unique: true,
      length: 10
   })
   card_number: string;

}
