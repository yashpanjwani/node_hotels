const mongoose =require('mongoose')
//const mongoURL = process.env.MONGODB_URL_LOCAL
const mongoURL = process.env.MONGODB_URL
mongoose.connect(mongoURL)

const db= mongoose.connection
db.on('connected', function(){
    console.log('connected to mongodb server')

})



module.export=db
  