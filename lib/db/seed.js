import mongoose from '../db/connection.js'
import Tours from '../models/Tours.js';
import toursData from '../db/data/Tours_API_v1.json' assert{type: 'json'}
import Campground from '../models/Campgrounds.js';
import campgroundData  from '../db/data/Campgrounds.json' assert{type: 'json'}
import Trails from '../models/Trails.js';
import trailsData from '../db/data/AllTrails.json' assert{type: 'json'}
import Parks from '../models/Parks.js';
import axios from 'axios';

//Seeding the dataset 
async function seed(){

    await Tours.deleteMany({}).maxTimeMS(20000);
    await Campground.deleteMany({}).maxTimeMS(2000);
    await Trails.deleteMany({}).maxTimeMS(20000);
    await Parks.deleteMany({}).maxTimeMS(20000);

    await Tours.create(toursData) 
    await Campground.create(campgroundData)
    await Trails.create(trailsData)

    axios.get('https://developer.nps.gov/api/v1/parks?limit=468&api_key=b71o5gcIN7N0pWVWkq2GiRz4ZdBEsKpzwxhFTl6q')
    .then(response => {
        const parks = response.data.data
        for(let i = 0; i < parks.length; i++){
            Parks.insertMany({
                name: parks[i].name,
                parkCode: parks[i].parkCode,          
                description: parks[i].description,
                states: parks[i].states,
                contacts: parks[i].contacts,
                entranceFees: parks[i].entranceFees,
                entrancePasses: parks[i].entrancePasses,
                fees: parks[i].fees,
                operatingHours: parks[i].operatingHours,
                weatherInfo: parks[i].weatherInfo,   
                designation: parks[i].designation
            })    

        }
    })
  .catch(error => {
    console.log(error);
  });

    process.exit()
}

seed()
