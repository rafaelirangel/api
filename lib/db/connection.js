import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/datasetApi', {useNewUrlParser: true,
useUnifiedTopology: true})

export default mongoose