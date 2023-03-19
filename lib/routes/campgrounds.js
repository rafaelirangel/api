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

//API DOCUMENTATION

/**
 * @api {GET} /campgrounds Get all Campgrounds
 * @apiName GetCampgrounds
 * @apiGroup Campgrounds
 * 
 * @apiSuccess {String} amenities  Features or services that are provided
 * @apiSuccess {String} contacts Campgound Contact 
 * @apiSuccess {String} campsites Info about Campground
 * @apiSuccess {String} _id Object id
 * @apiSuccess {String} name Name of the campground
 * @apiSuccess {String} parkCode Code of the campground
 * @apiSuccess {String} description Campground description
 * @apiSuccess {String} regulationsOverview Campgound Rules
 * @apiSuccess {Object[]} fees Fees
 * @apiSuccess {Object[]} addresses Campground Address
 * @apiSuccess {String} weather Information about the weather
 * 
 * @apiSuccessExample Successful Response:
 * {
 *       "amenities": {
 *           "toilets": [
 *               "Composting Toilets - year round"
 *           ],
 *           "showers": [
 *               "None"
 *           ],
 *           "staffOrVolunteerHostOnsite": "No",
 *           "potableWater": [
 *               "No water"
 *           ],
 *           "firewoodForSale": "No"
 *       },
 *       "contacts": {
 *           "phoneNumbers": [],
 *           "emailAddresses": []
 *       },
 *       "campsites": {
 *           "totalSites": "5",
 *           "group": "0",
 *           "tentOnly": "5",
 *           "electricalHookups": "0",
 *           "rvOnly": "0",
 *           "walkBoatTo": "4"
 *       },
 *       "_id": "64161f12b93cd726a1e127b7",
 *       "name": "Brooklyn Campground",
 *       "parkCode": "neri",
 *       "description": "Take Gatewood Road to the Cunard turnoff, between Oak Hill and Fayetteville. Turn, then go 1.8 miles, then follow signs to Cunard River Access. Bear right through the boat launch parking lot and continue upstream for a mile. Sites are on the left. There are four shaded walk-in sites and one drive-in site for tents only.",
 *       "regulationsOverview": "• Two vehicles permitted per site. • Quiet hours are from 10:00 PM to 6:00 AM. • Two camping units (tent or RV) with a maximum of 8 people per site. • Camp only in designated campsites. • Limit of 14 days within a 28-day period within any park campground or camping area. • Public intoxication, disorderly conduct, and possession of alcohol by minors is prohibited. • Possession and use of firearms is prohibited in the camping area. • Pets must be kept on a leash. • You are in a national park area, help protect it: littering is prohibited. • Use existing fire rings. • Burn only dead wood found on the ground. • Do not drive nails into trees, or hang lanterns against trees. • Please use the provided toilet facilities. • Broken glass is a hazard to all -- use plastic and aluminum containers when possible. • Respect other river users.",
 *       "fees": [
 *           {
 *               "cost": "0.00",
 *               "description": "These primitive camping areas have no drinking water or hookups, and limited restroom facilities. All sites are managed on a first-come, first-served basis and reservations are not accepted. There are no fees for camping.",
 *               "title": "Brooklyn Campground",
 *               "_id": "64161f12b93cd726a1e127b8"
 *           }
 *       ],
 *       "addresses": [
 *           {
 *               "postalCode": "25830",
 *               "city": "Cunard",
 *               "stateCode": "WV",
 *               "line1": "Brooklyn Campground",
 *               "_id": "64161f12b93cd726a1e127b9"
 *           },
 *           {
 *               "postalCode": "25846",
 *               "city": "Glen Jean",
 *               "stateCode": "WV",
 *               "line1": "PO Box 246, 104 Main Street",
 *               "_id": "64161f12b93cd726a1e127ba"
 *           }
 *       ],
 *       "weatherOverview": "Weather in the Appalachian Mountains can be unpredictable and can change quickly. Always be prepared for the possibility of sudden storms. Weather in the mountains is often cooler and wetter than the surrounding area. On average, the warmest month is July. The maximum average precipitation also occurs in July.",
 *       "numberOfSitesReservable": "0",
 *       "numberOfSitesFirstComeFirstServe": "5",
 *       "__v": 0
 *   },
 * ...
*/


/**
 * @api {GET} /campgrounds/:id Get a campground by ID
 * @apiName GetCampgroundByID
 * @apiGroup Campgrounds
 * 
 * @apiSuccess {String} amenities  Features or services that are provided
 * @apiSuccess {String} contacts Campgound Contact 
 * @apiSuccess {String} campsites Info about Campground
 * @apiSuccess {String} _id Object id
 * @apiSuccess {String} name Name of the campground
 * @apiSuccess {String} parkCode Code of the campground
 * @apiSuccess {String} description Campground description
 * @apiSuccess {String} regulationsOverview Campgound Rules
 * @apiSuccess {Object[]} fees Fees
 * @apiSuccess {Object[]} addresses Campground Address
 * @apiSuccess {String} weather Information about the weather
 * 
 * @apiSuccessExample Successful Response:
 *   {
 *       "amenities": {
 *           "toilets": [
 *               "No Toilets"
 *           ],
 *           "showers": [
 *               "None"
 *           ],
 *           "staffOrVolunteerHostOnsite": "No",
 *           "potableWater": [
 *               "No water"
 *           ],
 *           "firewoodForSale": "No"
 *       },
 *       "contacts": {
 *           "phoneNumbers": [],
 *           "emailAddresses": []
 *       },
 *       "campsites": {
 *           "totalSites": "14",
 *           "group": "0",
 *           "tentOnly": "14",
 *           "electricalHookups": "0",
 *           "rvOnly": "0",
 *           "walkBoatTo": "0"
 *       },
 *       "_id": "64161f12b93cd726a1e129fd",
 *       "name": "Dosewallips Campground (Walk-In Only)",
 *       "parkCode": "olym",
 *       "description": "Perfect for secluded tent camping. The access road is washed out 6.5 miles from the campground and it is not vehicle accessible.",
 *       "regulationsOverview": "",
 *       "fees": [
 *           {
 *               "cost": "15.00",
 *               "description": "$15 per night.",
 *               "title": "Dosewallips Campground (Walk-In Only)",
 *               "_id": "64161f12b93cd726a1e129fe"
 *           }
 *       ],
 *       "addresses": [
 *           {
 *               "postalCode": "98362",
 *               "city": "Port Angeles",
 *               "stateCode": "WA",
 *               "line1": "",
 *               "_id": "64161f12b93cd726a1e129ff"
 *           }
 *       ],
 *       "weatherOverview": "Weather and conditions at Olympic can change quickly. For a safe and enjoyable trip, check road, campground, weather, and trail conditions before your visit. Current road, campground, and weather information is also available by calling (360) 565-3131 or visiting the park website at http://www.nps.gov/olym/planyourvisit/current-conditions.htm",
 *       "numberOfSitesReservable": "0",
 *       "numberOfSitesFirstComeFirstServe": "14",
 *       "__v": 0
 *   },
*/

