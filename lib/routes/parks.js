import express, { response } from 'express';
import axios from 'axios';
import Parks from '../models/Parks.js';

const parksRouter = express.Router()

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

  parksRouter.get('/', async (req, res) => {
    const park = await Parks.find({})
        res.json(park)
  })

  parksRouter.get('/:name', async (req, res) => {
    const park = await Parks.find({name: req.params.name})
        res.json(park)
  })

export default parksRouter
