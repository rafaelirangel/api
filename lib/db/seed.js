import mongoose from '../db/connection.js'
import Tours from '../models/Tours.js';
import toursData from '../db/data/Tours_API_v1.json' assert{type: 'json'}
import Campground from '../models/Campgrounds.js';
import campgroundData  from '../db/data/Campgrounds.json' assert{type: 'json'}
import Trails from '../models/Trails.js';
import trailsData from '../db/data/AllTrails.json' assert{type: 'json'}


async function seed(){

    await Tours.deleteMany({}).maxTimeMS(20000);
    await Campground.deleteMany({}).maxTimeMS(2000);
    await Trails.deleteMany({}).maxTimeMS(20000);

    await Tours.create(toursData) 
    await Campground.create(campgroundData)
    await Trails.create(trailsData)

    process.exit()
}

seed()
