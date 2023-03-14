import mongoose from '../db/connection.js'

const TrailsSchema = new mongoose.Schema({
    name: String,
    area_name: String,
    city_name: String,
    state_name: String,
    _geoloc:{
        type: {
            type: String,
            enum: ['Point'],
        },
        lat: {
            type: [Number]
        }, 
        lng: {
            type: [Number]
        }
    },
    popularity: Number,
    length: Number,
    elevation_gain: Number,
    difficulty_rating: Number,
    route_type: String,
    visitor_usage: Number,
    avg_rating: Number,
    num_reviews: Number,
    features: [String],
    activities: [String]
})


export default mongoose.model('Parks', TrailsSchema ) 

//Fix the Geoloc