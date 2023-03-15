import express from 'express'
import Campground from '../models/Campgrounds.js';

const campgroundRouter = express.Router()

campgroundRouter.get('/', async (req, res) => {
    const campgrounds = await Campground.find({})
    res.json(campgrounds)
})

export default campgroundRouter