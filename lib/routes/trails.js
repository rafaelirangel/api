import express from 'express'
import Trails from "../models/Trails.js";

const hikingTrailsRouter = express.Router()

//Retrieving all trails
hikingTrailsRouter.get('/', async (req, res) => {
    const trails = await Trails.find({})
    res.json(trails)
})

//Retrieving a few trails by the City name
hikingTrailsRouter.get('/:cityName', async (req, res) => {
    const trailId = await Trails.find({city_name: req.params.cityName})
    res.json(trailId)
})

//Retrieving a specific trail by the name
hikingTrailsRouter.get('/:cityName/:name', async (req, res) => {
    const trail = await Trails.findOne({name: req.params.name})
    res.json(trail)
})

//Retrieving a specific trail by the name & Id
hikingTrailsRouter.get('/:cityName/:name/:id', async (req, res) => {
    const trailId = await Trails.findById(req.params.id)
    res.json(trailId)
})




export default hikingTrailsRouter