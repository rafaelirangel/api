import express from 'express'
import Tours from '../models/Tours.js';

const tourRouter = express.Router()

// Handling GET Request
// Retrieving all Tours.
tourRouter.get('/', async (req, res) => {
    const tours = await Tours.find({})
    res.json(tours)
})

// Retrieving data based on the type of the tour.
tourRouter.get('/:tourType', async (req, res) => {
    const tourType = await Tours.find({TourType: req.params.tourType})
    res.json(tourType)
})

// Retrieving data based on the type of the tour.
tourRouter.get('/:tourType/:id', async (req, res) => {
    const tourTypeId = await Tours.find({_id: req.params.id})
    res.json(tourTypeId)
})

// Handling POST Request. Created three new tours object using Postman.
// For Postman reference -> TourId(550, 551, 552)
tourRouter.post('/', async (req, res) => {
    await Tours.insertMany(req.body)
    .then(newTour => {
        res.json(newTour)
    })
})

// Handling DELETE Request. Deleted Objects by ID. 
tourRouter.delete('/:id', async(req, res) => {
    let tours = await Tours.findOneAndDelete({_id: req.params.id})
    res.json(tours)
})

export default tourRouter