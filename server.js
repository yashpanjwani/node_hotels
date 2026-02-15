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
app.get('/chicken', (req, res)=>{
res.send('sure sir, i would love to serve chicken')
})
app.get('/idli', (req, res)=>{
var customized_idli = {
name: 'rava idli',
size: '10 cm diameter',
is_sambhar: true,
is_chutney: false
}
res.send(customized_idli)
})







app.get('/menu', async function(req,res){
    try{
        const data= await MenuItem.find()
        console.log('data fetched')
        res.status(200).json(data)

    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})

    }
})

app.post('/menu', async (req, res) => {
try {
const menuItemData = req.body; // Assuming the requestbody contains menu item data
// Create a new menu item using the Mongoose model
const menuItem = new MenuItem(menuItemData);
// Save the new menu item to the database
const menu_data = await menuItem.save();
console.log('Menu item saved');
res.status(201).json(menu_data);
} catch (error) {
console.error('Error creating menu item:', error);
res.status(500).json({ error: 'Internal server error' });
}
})







const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)


app.listen(5000, ()=>{
console.log('listening on port 5000');
})