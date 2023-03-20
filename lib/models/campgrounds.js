import mongoose from '../db/connection.js'

const campgroundSchema = new mongoose.Schema({
        name: String,
        parkCode: String,
        description: String,
        regulationsOverview: String,
        amenities: {
            toilets: [String],
            internetConectivity: String,
            showers: [String],
            staffOrVolunteerHostOnsite: String,
            potableWater: [String],
            firewoodForSale: String,
        },
        contacts: {
            phoneNumbers: [{phoneNumber: String}],
            emailAddresses: [{emailAddress: String}]
        },
        fees:[{
                cost: String,
                description: String,
                title: String
            }],
        addresses: [{
            postalCode: String,
            city: String,
            stateCode: String,
            line1: String,
        }],
        weatherOverview: String,
        campsites: {
            totalSites: String,
            group: String,
            tentOnly: String,
            electricalHookups: String,
            rvOnly: String,
            walkBoatTo: String,
        },
})

export default mongoose.model('Campground', campgroundSchema)
