const mongoose =require('mongoose')
//const mongoURL = 'mongodb://localhost:27017/hotels'
const mongoURL = process.env.MONGODB_URL
mongoose.connect(mongoURL)

const db= mongoose.connection;
db.on('connected', function(){
    console.log('connected to mongodb server')

})



module.export=db
  