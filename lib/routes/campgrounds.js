import express from 'express'
import Campground from '../models/Campgrounds.js';

const campgroundRouter = express.Router()

// Handling GET Request.
// Retrieving all Campground.
campgroundRouter.get('/', async (req, res) => {
    const campgrounds = await Campground.find({})
    res.json(campgrounds)
})

// Retrieving data based on the Id.
campgroundRouter.get('/:id', async (req, res) => {
    const name = await Campground.findById({_id: req.params.id})
    res.json(name)
})


export default campgroundRouter