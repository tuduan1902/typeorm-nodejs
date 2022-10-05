import express from "express"
import { Client } from "../entities/Client"
import { createQueryBuilder } from "typeorm"
import { Banker } from '../entities/Banker'


const router = express.Router();


router.get('/api/bankers', async (req, res) => {
   const clients = await createQueryBuilder(
		'client'
	)
		.select('client.first_name')
		.from(Client, 'client')
		.leftJoinAndSelect(
			'client.transactions',
			'transaction'
		)
		.where('client.id = :clientId', {
			clientId: 3,
		})
		.getOne();

	return res.json(clients);
})

export { router as fetchClientRouter }