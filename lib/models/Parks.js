import mongoose from '../db/connection.js'

const parkSchema = new mongoose.Schema({
    name: String,
    parkCode: String,
    description: String,
    weatherInfo: String,
    designation: String,
    states: String,
    contacts: [{ 
        phoneNumbers: [{
            phoneNumber: String,
            description: String,
            extension: String,
          }], 
          emailAddresses: [{
              emailAddress: String,
              description: String
            }]
        }],
})

export default mongoose.model('Parks', parkSchema)