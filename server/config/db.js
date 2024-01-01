// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true
//     });

//     console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
//   } catch (err) {
//     console.log(`Error: ${err.message}`.red);
//     process.exit(1);
//   }
// }

// module.exports = connectDB;
const mongoose = require('mongoose');
require('dotenv').config();

// * This is the mongodb Atlas connection link
const dbConnect = "mongodb+srv://mern-stack:VVwZ7FmF9UEpKoAS@cluster0.dnawuou.mongodb.net/?retryWrites=true&w=majority"


// * Theses are the parameters
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// * This is the mongodb Atlas connection
mongoose.connect(dbConnect,connectionParams).then(() => {

    console.log('Hurrah! MongoDB connection successfully established :)');

}).catch((err) => {

    console.log('Sorry Bro! MongoDB is not connected :(', err);

})