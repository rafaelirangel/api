import express from 'express'
import Trails from "../models/Trails.js";

const hikingTrailsRouter = express.Router()

hikingTrailsRouter.get('/', async (req, res) => {
    const trails = await Trails.find({})
    res.json(trails)
})

export default hikingTrailsRouter