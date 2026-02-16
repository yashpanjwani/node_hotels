// console.log("server is running")


// function add(a,b){
//     return a+b
// }
// let d=add(3,10)
// console.log(d)

// var fs=require('fs')
// var os=require('os')


// var user=os.userInfo()
// console.log(user)

require('dotenv').config()
const express = require('express')
const app = express();
const db= require('./db')



const bodyParser= require('body-parser')
app.use(bodyParser.json())






const Person = require('./models/person')
const MenuItem = require('./models/MenuItem')





app.get('/', function (req, res) {
res.send('Welcome to my hotel... How i can help you ?, wehave list of menus')
})













const personRoutes = require('./routes/personRoutes')
const menuItemRoutes = require('./routes/menuItemRoutes')



app.use('/person', personRoutes)
app.use('/menu', menuItemRoutes)

const PORT = process.env.PORT || 5000



app.listen(5000, ()=>{
console.log('listening on port 5000');
})