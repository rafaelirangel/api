import mongoose from '../db/connection.js'

const campgroundSchema = new mongoose.Schema({
        name: String,
        parkCode: String,
        description: String,
        regulationsOverview: String,
        amenities: [{
            toilets: [String],
            internetConectivity: String,
            showers: [String],
            staffOrVolunteerHostOnsite: String,
            potableWater: [String],
            firewoodForSale: String,
        }],
        contacts: [{
            phoneNumbers: [{String}],
            emailAddresses: [{emailAddress: String}]
        }],
        fees: [{
                cost: String,
                description: String,
                title: String
            }],
        operatingHours: [{
                exceptions: [{String}],
                description: String,
                standardHours: {
                    wednesday:String,
                    monday: String,
                    thursday: String,
                    sunday: String,
                    tuesday: String,
                    friday: String,
                    saturday: String
                },
        }],
        addresses: [{String}],
        weatherOverview: String,
        numberOfSitesReservable: String,
        numberOfSitesFirstComeFirstServe: String,
        campsites: [{
            totalSites: String,
            group: String,
            tentOnly: String,
            electricalHookups: String,
            rvOnly: String,
            walkBoatTo: String,
        }],
        accessibility: [{
            wheelchairAccess: String,
            fireStovePolicy: String,
            rvAllowed: String,
            rvInfo: String,
            rvMaxLength: String,
            additionalInfo: String,
            trailerMaxLength: String,
            adaInfo: String,
            trailerAllowed: String,
            accessRoads: [String],
            classifications: [String]
        }],        
})

export default mongoose.model('Campground', campgroundSchema)
