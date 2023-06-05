const mongoose = require('mongoose');
require('dotenv').config();

const mongooseURI=process.env.mongooseURI;
const connectToMongo=()=>{
  mongoose.connect(`${mongooseURI}`, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error', err));
}
mongoose.set('strictQuery', false);
module.exports= connectToMongo;;