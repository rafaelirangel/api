import mongoose from '../db/connection.js'

const tourSchema = new mongoose.Schema({
          TourID: String, 
          FacilityID: String,
          TourName: String,
          TourType: String,
          TourDescription: String,
          TourDuration: Number,
          TourAccessible: Boolean,
})

export default mongoose.model('Tours', tourSchema)
