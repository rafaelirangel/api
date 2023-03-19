import express from 'express'
import Parks from '../models/Parks.js';

const parksRouter = express.Router()


  parksRouter.get('/', async (req, res) => {
    const park = await Parks.find({})
        res.json(park)
  })




  parksRouter.get('/:name', async (req, res) => {
    const park = await Parks.find({name: req.params.name})
        res.json(park)
  })

export default parksRouter

//API DOCUMENTATION

/**
 * @api {GET} /parks Get all Parks
 * @apiName GetParks
 * @apiGroup Parks
 * 
 * 
 * @apiSuccess {String} _id Object id
 * @apiSuccess {String} name Name of the park
 * @apiSuccess {String} parkCode Code of the park
 * @apiSuccess {String} description Park description
 * @apiSuccess {String} weather Information about the park weather
 * @apiSuccess {String} designation Park designation
 * @apiSuccess {String} state State where the park is located 
 * @apiSuccess {Object[]} contacts Array of contacts info about the Park 
 * 
 * @apiSuccessExample Successful Response:
 * {
 *       "_id": "64161f14b93cd726a1e15105",
 *      "name": "Abraham Lincoln Birthplace",
 *      "parkCode": "abli",
 *       "description": "For over a century people from around the world have come to rural Central Kentucky to honor the humble beginnings of our 16th president, Abraham Lincoln. His early life on Kentucky's frontier shaped his character and prepared him to lead the nation through Civil War. Visit our country's first memorial to Lincoln, built with donations from young and old, and the site of his childhood home.",
 *       "weatherInfo": "There are four distinct seasons in Central Kentucky. However, temperature and weather conditions can vary widely within those seasons. Spring and Fall are generally pleasant with frequent rain showers. Summer is usually hot and humid. Winter is moderately cold with mixed precipitation.",
 *       "designation": "National Historical Park",
 *       "states": "KY",
 *      "contacts": [
 *          {
 *               "phoneNumbers": [
 *                   {
 *                       "phoneNumber": "2703583137",
 *                       "description": "",
 *                       "extension": "",
 *                       "_id": "64161f14b93cd726a1e15107"
 *                   },
 *                   {
 *                       "phoneNumber": "2703583874",
 *                       "description": "",
 *                       "extension": "",
 *                       "_id": "64161f14b93cd726a1e15108"
 *                   }
 *               ],
 *               "emailAddresses": [
 *                   {
 *                       "emailAddress": "ABLI_Administration@nps.gov",
 *                       "description": "",
 *                       "_id": "64161f14b93cd726a1e15109"
 *                   }
 *               ],
 *               "_id": "64161f14b93cd726a1e15106"
 *           }
 *       ],
 *       "__v": 0
 * 
 *   },
 * ...
 *
*/

/** 
 * @api {GET} /parks/:name Get a park by its Name
 * @apiName GetParkByName 
 * @apiGroup Parks
 * 
 * @apiParam {String} name Park name
 * 
 * @apiSuccess {String} _id Object id
 * @apiSuccess {String} name Name of the park
 * @apiSuccess {String} parkCode Code of the park
 * @apiSuccess {String} description Park description
 * @apiSuccess {String} weather Information about the park weather
 * @apiSuccess {String} designation Park designation
 * @apiSuccess {String} state State where the park is located 
 * @apiSuccess {Object[]} contacts Array of contacts info about the Park 
 * 
 * @apiSuccessExample Successful Response:
 * {
 *       "_id": "64161f14b93cd726a1e15105",
 *      "name": "Abraham Lincoln Birthplace",
 *      "parkCode": "abli",
 *       "description": "For over a century people from around the world have come to rural Central Kentucky to honor the humble beginnings of our 16th president, Abraham Lincoln. His early life on Kentucky's frontier shaped his character and prepared him to lead the nation through Civil War. Visit our country's first memorial to Lincoln, built with donations from young and old, and the site of his childhood home.",
 *       "weatherInfo": "There are four distinct seasons in Central Kentucky. However, temperature and weather conditions can vary widely within those seasons. Spring and Fall are generally pleasant with frequent rain showers. Summer is usually hot and humid. Winter is moderately cold with mixed precipitation.",
 *       "designation": "National Historical Park",
 *       "states": "KY",
 *      "contacts": [
 *          {
 *               "phoneNumbers": [
 *                   {
 *                       "phoneNumber": "2703583137",
 *                       "description": "",
 *                       "extension": "",
 *                       "_id": "64161f14b93cd726a1e15107"
 *                   },
 *                   {
 *                       "phoneNumber": "2703583874",
 *                       "description": "",
 *                       "extension": "",
 *                       "_id": "64161f14b93cd726a1e15108"
 *                   }
 *               ],
 *               "emailAddresses": [
 *                   {
 *                       "emailAddress": "ABLI_Administration@nps.gov",
 *                       "description": "",
 *                       "_id": "64161f14b93cd726a1e15109"
 *                   }
 *               ],
 *               "_id": "64161f14b93cd726a1e15106"
 *           }
 *       ],
 *       "__v": 0
 *   }
*/
