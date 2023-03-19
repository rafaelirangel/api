import express from 'express'
import Tours from '../models/Tours.js';

const tourRouter = express.Router()

// Handling GET Request
// Retrieving all Tours.
tourRouter.get('/', async (req, res) => {
    const tours = await Tours.find({})
    res.json(tours)
})

// Retrieving data based on the type of the tour.
tourRouter.get('/:tourType', async (req, res) => {
    const tourType = await Tours.find({TourType: req.params.tourType})
    res.json(tourType)
})

// Retrieving data based on the Id.
tourRouter.get('/:tourType/:id', async (req, res) => {
    const tourTypeId = await Tours.find({_id: req.params.id})
    res.json(tourTypeId)
})

// Handling POST Request. Created three new tours object using Postman.
// For reference -> TourId(550, 551, 552)
tourRouter.post('/', async (req, res) => {
    await Tours.insertMany(req.body)
    .then(newTour => {
        res.json(newTour)
    })
})

// Handling DELETE Request. Deleted Objects by ID. 
tourRouter.delete('/:id', async(req, res) => {
    let tours = await Tours.findOneAndDelete({_id: req.params.id})
    res.json(tours)
})

export default tourRouter

//API DOCUMENTATION

/** 
 * @api {GET} /tours Get all tours
 * @apiName GetTours
 * @apiGroup Tours
 * 
 * @apiSuccess {String} _id Object id
 * @apiSuccess {String} TourID Unique tour ID
 * @apiSuccess {String} FacilityID Facility ID
 * @apiSuccess {String} TourName Name of the tour
 * @apiSuccess {String} TourType Category of the tour
 * @apiSuccess {String} TourDescription Description of the tour
 * @apiSuccess {Number} TourDuration Time that the tour takes to complete
 * @apiSuccess {Boolean} TourAccessible Refers to whether the tour or activity is accessible to individuals with disabilities or special needs.
 * 
 * @apiSuccessExample Successful Response:
 *[
 *   {
 *       "_id": "64161f11b93cd726a1e121f5",
 *       "TourID": "100",
 *       "FacilityID": "234640",
 *       "TourName": "Grand Avenue",
 *       "TourType": "Cave Tour",
 *       "TourDescription": "Dramatic cave changes, dry cave vs. damp cave, gypsum, dripstone, and early exploration.",
 *       "TourDuration": 240,
 *       "TourAccessible": false,
 *       "__v": 0
 *   },
 *     {
 *       "_id": "64161f11b93cd726a1e121f6",
 *      "TourID": "1006",
 *       "FacilityID": "250029",
 *       "TourName": "White House Easter Egg Roll",
 *       "TourType": "Historic Tour",
 *       "TourDescription": "White House Easter Egg Roll",
 *       "TourDuration": 0,
 *       "TourAccessible": true,
 *       "__v": 0
 *   },
 *   {
 *       "_id": "64161f11b93cd726a1e121f7",
 *       "TourID": "10063833",
 *       "FacilityID": "10063832",
 *       "TourName": "Cape Lookout National Seashore Duck Blind Lottery Event",
 *       "TourType": "Nature Tour",
 *       "TourDescription": "Cape Lookout Duck Blind Event",
 *       "TourDuration": 1,
 *       "TourAccessible": false,
 *       "__v": 0
 *   },
 *   ...
 *]     
*/


/** 
 * @api {GET} /tours/:tourType Get a tour by Type
 * @apiName GetToursByType
 * @apiGroup Tours
 * 
 * @apiParam {String} TourType Category of the tour
 * 
 * @apiSuccess {String} _id Object id
 * @apiSuccess {String} TourID Unique tour ID
 * @apiSuccess {String} FacilityID Facility ID
 * @apiSuccess {String} TourName Name of the tour
 * @apiSuccess {String} TourType Category of the tour
 * @apiSuccess {String} TourDescription Description of the tour
 * @apiSuccess {Number} TourDuration Time that the tour takes to complete
 * @apiSuccess {Boolean} TourAccessible Refers to whether the tour or activity is accessible to individuals with disabilities or special needs.
 * 
 * @apiSuccessExample Successful Response:
 *[
 *   {
 *       "_id": "64161f11b93cd726a1e121f7",
 *       "TourID": "10063833",
 *       "FacilityID": "10063832",
 *       "TourName": "Cape Lookout National Seashore Duck Blind Lottery Event",
 *       "TourType": "Nature Tour",
 *       "TourDescription": "Cape Lookout Duck Blind Event",
 *       "TourDuration": 1,
 *       "TourAccessible": false,
 *       "__v": 0
 *   },
 *  {
 *       "_id": "64161f11b93cd726a1e121fb",
 *       "TourID": "10072051",
 *       "FacilityID": "10072050",
 *       "TourName": "Stars Over Sand Beach",
 *       "TourType": "Nature Tour",
 *       "TourDescription": "Maine’s striking coastline is often admired for its rugged rocks. Relax on Acadia’s only true sand beach with uninterrupted views of the night sky while Park Rangers share significant stories to help discover the intricacies of the stars.  \nAcadia's Sand Beach, located just off the Park Loop Road, is a unique and exceptionally dark location for stargazing. Come join rangers as they share the natural history, inspiring stories, and an orientation to the night skies of Down East Maine. \nSand Beach is not handicapped-accessible. Bring a towel or chair and dress warmly. Please limit the use of flashlights and use the red light setting when possible. Bring bug spray as there are insects on the beach.\nSpace is limited and reservations are required; no walk-ups will be permitted.",
 *       "TourDuration": 60,
 *       "TourAccessible": false,
 *       "__v": 0
 *   },
 *   ...
 *]     
*/


/** 
 * @api {GET} /:tourType/:id Get a tour By ID
 * @apiName GetTourByID
 * @apiGroup Tours
 * 
 * @apiParam {String} _id Object ID
 * 
 * @apiSuccess {String} _id Object id
 * @apiSuccess {String} TourID Unique tour ID
 * @apiSuccess {String} FacilityID Facility ID
 * @apiSuccess {String} TourName Name of the tour
 * @apiSuccess {String} TourType Category of the tour
 * @apiSuccess {String} TourDescription Description of the tour
 * @apiSuccess {Number} TourDuration Time that the tour takes to complete
 * @apiSuccess {Boolean} TourAccessible Refers to whether the tour or activity is accessible to individuals with disabilities or special needs.
 * 
 * @apiSuccessExample Successful Response:
 * [
 *   {
 *       "_id": "64161f11b93cd726a1e121fd",
 *       "TourID": "10075178",
 *       "FacilityID": "10075177",
 *       "TourName": "Scenic Drive Vehicle Entry",
 *       "TourType": "Nature Tour",
 *       "TourDescription": "Provides access for one private vehicle or up to two motorcycles or scooters to access the Scenic Drive including the Visitor Center and  all designated parking areas along the route. The average time spent along the Scenic Drive is approximately 8 hours.",
 *       "TourDuration": 60,
 *       "TourAccessible": false,
 *       "__v": 0
 *   } 
 * ] 
*/


/** 
 * @api {POST} /tours Create a Tour
 * @apiName AddTour
 * @apiGroup Tours
 * 
 * @apiParam {String} TourID Must be unique
 * @apiParam {String} FacilityID Not unique
 * @apiParam {String} TourName Not unique
 * @apiParam {String} TourDescription Must contain this info
 * @apiParam {Number} TourDuration Must contain this info
 * @apiParam {Boolean} TourAccessible Must contain this info
 * 
 * @apiParamExample Body:
 * 
 * {
 *      "TourID": "550"
 *      "FacilityID": "23943020",
 *      "TourName": "Road To Hana"
 *      "TourType": "Nature Tour"
 *      "TourDescription": "Explore various areas along the road to Hana, including a black sand beach, numerous waterfalls, painted eucalyptus trees, coastal overlooks, and so much more.
 *      "TourDuration": 11,
 *      "TourAccessible": false,
 * }
 * 
 * @apiSuccess {String} _id Object id
 * @apiSuccess {String} TourID Unique tour ID
 * @apiSuccess {String} FacilityID Facility ID
 * @apiSuccess {String} TourName Name of the tour
 * @apiSuccess {String} TourType Category of the tour
 * @apiSuccess {String} TourDescription Description of the tour
 * @apiSuccess {Number} TourDuration Time that the tour takes to complete
 * @apiSuccess {Boolean} TourAccessible Refers to whether the tour or activity is accessible to individuals with disabilities or special needs.
 * 
 * @apiSuccessExample Successful Response:
 *[
 *   {
 *   "id": "641276f9e7e74eebd08c0779".
 *   "TourID": "550"
 *   "FacilityID": "23943020",
 *   "TourName". "Road To Hana"
 *   "TourType": "Nature Tour"
 *   "TourDescription": "Explore various areas along the road to Hana, including a black sand beach, numerous waterfalls, painted eucalyptus trees, coastal overlooks, and so much more.
 *   "TourDuration": 11,
 *   "TourAccessible": false,
 *   "__v": 0
 *   },
 *]     
*/


/** 
 * @api {DELETE} /:id Delete a tour by Object ID
 * @apiName GetTourById
 * @apiGroup Tours
 * 
 * @apiParam {String} _id Object ID
 * 
 * @apiSuccess {String} _id Object id
 * @apiSuccess {String} TourID Unique tour ID
 * @apiSuccess {String} FacilityID Facility ID
 * @apiSuccess {String} TourName Name of the tour
 * @apiSuccess {String} TourType Category of the tour
 * @apiSuccess {String} TourDescription Description of the tour
 * @apiSuccess {Number} TourDuration Time that the tour takes to complete
 * @apiSuccess {Boolean} TourAccessible Refers to whether the tour or activity is accessible to individuals with disabilities or special needs.
 * 
 * @apiSuccessExample Successful Response:
 * null
 *   
*/
