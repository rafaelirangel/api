import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/theNaturalAdventure', {useNewUrlParser: true,
useUnifiedTopology: true})

export default mongoose