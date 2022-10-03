import {createConnection} from 'typeorm'
import { Client } from './entities/Client'
import { Banker } from './entities/Banker'
import express from 'express'
import { Transaction } from './entities/Transaction'

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
      console.log('Connected to Postgres')

      app.listen(8080, () => {
         console.log("Now running on port 8080")
      })
   } catch(error) {
      console.error(error);
      throw new Error('Unable to connect to db')
   }
}
main()