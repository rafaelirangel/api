import express from 'express'
import Trails from "../models/Trails.js";

const hikingTrailsRouter = express.Router()

// Handling GET Request.
// Retrieving all Trails.
hikingTrailsRouter.get('/', async (req, res) => {
    const trails = await Trails.find({})
    res.json(trails)
})

//Retrieving Trails based on the City name
hikingTrailsRouter.get('/:cityName', async (req, res) => {
    const cityName = await Trails.find({city_name: req.params.cityName})
    res.json(cityName)
})

//Retrieving a specific trail by the Name.
hikingTrailsRouter.get('/:cityName/:name', async (req, res) => {
    const trail = await Trails.findOne({name: req.params.name})
    res.json(trail)
})

//Retrieving a specific trail by the Id
hikingTrailsRouter.get('/:cityName/:name/:id', async (req, res) => {
    const trailId = await Trails.findById(req.params.id)
    res.json(trailId)
})


//Updating num_reviews of all the trails
hikingTrailsRouter.put('/', async (req, res) => {
    const numReviews = await Trails.updateMany(
        {},
        {$set: req.body, $inc: {num_reviews: 4}},
        {new: true}
    )
    res.json(numReviews)
})


export default hikingTrailsRouter