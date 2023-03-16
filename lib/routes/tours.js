import express from 'express'
import Tours from '../models/Tours.js';

const tourRouter = express.Router()

tourRouter.get('/', async (req, res) => {
    const tours = await Tours.find({})
    res.json(tours)
})

//Retrieving a few Tours by the type of the tour
tourRouter.get('/:tourType', async (req, res) => {
    const tourType = await Tours.find({TourType: req.params.tourType})
    res.json(tourType)
})

//Created three new tours object using Postman. TourId 550, 551, 552
tourRouter.post('/', async (req, res) => {
    await Tours.insertMany(req.body)
    .then(newTour => {
        res.json(newTour)
    })
})

export default tourRouter