const mongoose =require('mongoose')
const mongoURL = 'mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL)

const db= mongoose.connection;
db.on('connected', function(){
    console.log('connected to mongodb server')

})



module.export=db
  