import mongoose from '../db/connection.js'
import Tours from '../models/tours.js';
// import Trails from '../models/trails.js';
import toursData from '../db/data/Tours_API_v1.json' assert{type: 'json'}
// import trailsData from '../db/data/AllTrails.json' assert{type: 'json'}


async function seed(){

    // await Tours.deleteMany().maxTimeMS(20000);
    // await Trails.deleteMany({})

    await Tours.create(toursData) 
    // await Trails.create(trailsData)

    process.exit()
}

seed()
