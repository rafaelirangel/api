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

//Updating num_reviews of all the trails
hikingTrailsRouter.put('/', async (req, res) => {
    const numReviews = await Trails.updateMany(
        {},
        {$set: req.body, $inc: {num_reviews: 5}},
        {new: true}
    )
    res.json(numReviews)
})

export default hikingTrailsRouter

//API DOCUMENTATION

/** 
 * @api {GET} /trails Get all hiking trails
 * @apiName GetTrails
 * @apiGroup Trails 
 * 
 * @apiSuccess {String} _id Object id
 * @apiSuccess {String} name Name of the trail
 * @apiSuccess {String} area_name Area where the trail is located
 * @apiSuccess {String} city_name City where the trail is located
 * @apiSuccess {String} state_name State where the trail is located 
 * @apiSuccess {Number} popularity Popularity of the trail
 * @apiSuccess {Number} length Lenght of the trail 'mi'
 * @apiSuccess {Number} elevation_gain The total amount you will climb in the trail 'ft'
 * @apiSuccess {Number} difficulty_rating  How hard it is to hike the trail
 * @apiSuccess {String} route_type Path the hiker will take
 * @apiSuccess {Number} avg_rating Rating of the trail
 * @apiSuccess {Number} num_reviews Number of reviews
 * @apiSuccess {[]} features Array of features
 * @apiSuccess {[]} activities Array of activities allowed
 * 
 * @apiSuccessExample Successful Response:
 * [
 * {
 *      "_id": "64161f12b93cd726a1e13725",
 *      "name": "Exit Glacier Trail",
 *      "area_name": "Kenai Fjords National Park",
 *      "city_name": "Seward",
 *      "state_name": "Alaska",
 *      "popularity": 17.7821,
 *      "length": 2896.812,
 *      "elevation_gain": 81.9912,
 *      "difficulty_rating": 1,
 *      "route_type": "out and back",
 *      "avg_rating": 4.5,
 *      "num_reviews": 224,
 *      "features": [
 *          "['dogs-no', 'partially-paved', 'views', 'wildlife']"
 *      ],
 *      "activities": [
 *          "['hiking', 'walking']"
 *      ],
 *      "__v": 0
 *      }
 * ]                   
*/

/** 
 * @api {GET} /trails/:cityName Get it by the name of the city.
 * @apiName GetTrailsbyCityName
 * @apiGroup Trails 
 * 
 * @apiParam {String} cityName Name of the city
 * 
 * @apiSuccess {String} _id Object id
 * @apiSuccess {String} name Name of the trail
 * @apiSuccess {String} area_name Area where the trail is located
 * @apiSuccess {String} city_name City where the trail is located
 * @apiSuccess {String} state_name State where the trail is located 
 * @apiSuccess {Number} popularity Popularity of the trail
 * @apiSuccess {Number} length Lenght of the trail 'mi'
 * @apiSuccess {Number} elevation_gain The total amount you will climb in the trail 'ft'
 * @apiSuccess {Number} difficulty_rating  How hard it is to hike the trail
 * @apiSuccess {String} route_type Path the hiker will take
 * @apiSuccess {Number} avg_rating Rating of the trail
 * @apiSuccess {Number} num_reviews Number of reviews
 * @apiSuccess {[]} features Array of features
 * @apiSuccess {[]} activities Array of activities allowed
 * 
 * @apiSuccessExample Successful Response:
 * {
 *      "_id": "64161f12b93cd726a1e13725",
 *      "name": "Exit Glacier Trail",
 *      "area_name": "Kenai Fjords National Park",
 *      "city_name": "Seward",
 *      "state_name": "Alaska",
 *      "popularity": 17.7821,
 *      "length": 2896.812,
 *      "elevation_gain": 81.9912,
 *      "difficulty_rating": 1,
 *      "route_type": "out and back",
 *      "avg_rating": 4.5,
 *      "num_reviews": 224,
 *      "features": [
 *          "['dogs-no', 'partially-paved', 'views', 'wildlife']"
 *      ],
 *      "activities": [
 *          "['hiking', 'walking']"
 *      ],
 *      "__v": 0
 *      },     
 * {
 *      "_id": "64161f12b93cd726a1e13723",
 *      "name": "Harding Ice Field Trail",
 *      "area_name": "Kenai Fjords National Park",
 *      "city_name": "Seward",
 *      "state_name": "Alaska",
 *      "popularity": 24.8931,
 *      "length": 15610.598,
 *      "elevation_gain": 1161.8976,
 *      "difficulty_rating": 5,
 *      "route_type": "out and back",
 *      "avg_rating": 5,
 *      "num_reviews": 423,
 *      "features": [
 *           "['dogs-no', 'forest', 'river', 'views', 'waterfall', 'wild-flowers', 'wildlife']"
 *      ],
 *      "activities": [
 *           "['birding', 'camping', 'hiking', 'nature-trips', 'trail-running']"
 *      ],
 *      "__v": 0
 * }             
*/

/** 
 * @api {GET} /trails/:cityName/:name Get it by the Name of the trail
 * @apiName GetTrailByTrailName
 * @apiGroup Trails 
 * 
 * @apiParam {String} name Name of the trail
 * 
 * @apiSuccess {String} _id Object id
 * @apiSuccess {String} name Name of the trail
 * @apiSuccess {String} area_name Area where the trail is located
 * @apiSuccess {String} city_name City where the trail is located
 * @apiSuccess {String} state_name State where the trail is located 
 * @apiSuccess {Number} popularity Popularity of the trail
 * @apiSuccess {Number} length Lenght of the trail 'mi'
 * @apiSuccess {Number} elevation_gain The total amount you will climb in the trail 'ft'
 * @apiSuccess {Number} difficulty_rating  How hard it is to hike the trail
 * @apiSuccess {String} route_type Path the hiker will take
 * @apiSuccess {Number} avg_rating Rating of the trail
 * @apiSuccess {Number} num_reviews Number of reviews
 * @apiSuccess {[]} features Array of features
 * @apiSuccess {[]} activities Array of activities allowed
 * 
 * @apiSuccessExample Successful Response:
 * {
 *      "_id": "64161f12b93cd726a1e13725",
 *      "name": "Exit Glacier Trail",
 *      "area_name": "Kenai Fjords National Park",
 *      "city_name": "Seward",
 *      "state_name": "Alaska",
 *      "popularity": 17.7821,
 *      "length": 2896.812,
 *      "elevation_gain": 81.9912,
 *      "difficulty_rating": 1,
 *      "route_type": "out and back",
 *      "avg_rating": 4.5,
 *      "num_reviews": 224,
 *      "features": [
 *          "['dogs-no', 'partially-paved', 'views', 'wildlife']"
 *      ],
 *      "activities": [
 *          "['hiking', 'walking']"
 *      ],
 *      "__v": 0
 *      },                   
*/


/** 
 * @api {PUT} /trails Update num_reviews of all the trails
 * @apiName UpdateTrailsNumOfReviews
 * @apiGroup Trails 
 * 
 * @apiParam {Number} num_reviews Number of reviews
 * 
 * @apiParamExample Query:
 * 
 *  const numReviews = await Trails.updateMany(
 *      {},
 *      {$set: req.body, $inc: {num_reviews: 5}},
 *      {new: true}
 *  )
 *  res.json(numReviews)
 * 
 * @apiSuccess {String} _id Object id
 * @apiSuccess {String} name Name of the trail
 * @apiSuccess {String} area_name Area where the trail is located
 * @apiSuccess {String} city_name City where the trail is located
 * @apiSuccess {String} state_name State where the trail is located 
 * @apiSuccess {Number} popularity Popularity of the trail
 * @apiSuccess {Number} length Lenght of the trail 'mi'
 * @apiSuccess {Number} elevation_gain The total amount you will climb in the trail 'ft'
 * @apiSuccess {Number} difficulty_rating  How hard it is to hike the trail
 * @apiSuccess {String} route_type Path the hiker will take
 * @apiSuccess {Number} avg_rating Rating of the trail
 * @apiSuccess {Number} num_reviews Number of reviews
 * @apiSuccess {[]} features Array of features
 * @apiSuccess {[]} activities Array of activities allowed
 * 
 * @apiSuccessExample Successful Response:
 * {
 *      "_id": "64161f12b93cd726a1e13725",
 *      "name": "Exit Glacier Trail",
 *      "area_name": "Kenai Fjords National Park",
 *      "city_name": "Seward",
 *      "state_name": "Alaska",
 *      "popularity": 17.7821,
 *      "length": 2896.812,
 *      "elevation_gain": 81.9912,
 *      "difficulty_rating": 1,
 *      "route_type": "out and back",
 *      "avg_rating": 4.5,
 *      "num_reviews": 229,
 *      "features": [
 *          "['dogs-no', 'partially-paved', 'views', 'wildlife']"
 *      ],
 *      "activities": [
 *          "['hiking', 'walking']"
 *      ],
 *      "__v": 0
 *      },                   
*/