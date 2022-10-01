import {createConnection} from 'typeorm'
import { Client } from './entities/Client'

const main = async () => {
   try{
      await createConnection({
         type: "postgres",
         host: "localhost",
         port: 5433,
         username: 'postgres',
         password: "tptd1234560",
         database: 'typeorm',
         entities: [Client]
      });
      console.log('Connected to Postgres')
   } catch(error) {
      console.error(error);
      throw new Error('Unable to connect to db')
   }
}
main()