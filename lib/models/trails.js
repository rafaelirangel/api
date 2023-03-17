import mongoose from '../db/connection.js'

const trailsSchema = new mongoose.Schema({
    name: String,
    area_name: String,
    city_name: String,
    state_name: String,
    popularity: Number,
    length: Number,
    elevation_gain: Number,
    difficulty_rating: Number,
    route_type: String,
    avg_rating: Number,
    num_reviews: Number,
    features: [String],
    activities: [String]
})

export default mongoose.model('Trails', trailsSchema ) 