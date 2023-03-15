import express from 'express'
import Tours from '../models/Tours.js';

const tourRouter = express.Router()

tourRouter.get('/', async (req, res) => {
    const tours = await Tours.find({})
    res.json(tours)
})

export default tourRouter