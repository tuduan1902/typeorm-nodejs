// entities: Create table in database
import {Entity, BaseEntity, Column, PrimaryColumn} from "typeorm"

@Entity('client')
export class Client extends BaseEntity {
   @PrimaryColumn()
   id: number

   @Column()
   first_name: string;

   @Column()
   last_name: string;

   @Column({
      unique: true // duy nhất 
   })
   email: string;

   @Column({
      unique: true,
      length: 10
   })
   card_number: string;

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
}
