import {createConnection} from 'typeorm'
import { Client } from './entities/Client'
import { Banker } from './entities/Banker'
import express from 'express'
import { Transaction } from './entities/Transaction'
import { createClientRouter } from './routes/create_client'
import { createBankerRouter } from './routes/create_banker'
import { createTransactionRouter } from './routes/create_transaction'
import { connectBankerToClientRouter } from './routes/connect_banker_to_client'
import { deleteClientRouter } from './routes/delete_client'
import { fetchClientRouter } from './routes/fetch_client'

const app = express()
const main = async () => {
   try{
      await createConnection({
         type: "postgres",
         host: "localhost",
         port: 5433,
         username: 'postgres',
         password: "tptd1234560",
         database: 'typeorm',
         entities: [Client, Banker, Transaction],
         synchronize: true  // đồng bộ hóa database
      })
      console.log('Connected to Postgres');

      app.use(express.json());
      app.use(createClientRouter);
      app.use(createBankerRouter);
      app.use(createTransactionRouter);
      app.use(connectBankerToClientRouter);
      app.use(deleteClientRouter);
      app.use(fetchClientRouter);
      
      app.listen(8080, () => {
         console.log("Now running on port 8080");
      });

   } catch(error) {
      console.error(error);
      throw new Error('Unable to connect to db');
   }
}
main()