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


app.post('/person',async function(req,res){

    try{
        const data = req.body

        const newPerson = new Person(data)

        const response= await newPerson.save()
        console.log('data saved',response)
        res.status(200).json(response)

    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'internal server error'})

    }

})

app.get('/person/:workType',async function(req,res){
    try{
         const workType= req.params.workType
    if(workType=='chef' || workType=='waiter'|| workType=='manager'){
        const response = await Person.find({work: workType})
        console.log('response fetched')
        res.status(200).json(response)


    }
    else{
        res.status(404).json({error:' Invalid work type'})
    }

    }
    catch(err){
         console.log(err)
        res.status(500).json({error:'internal server error'})


    }
   
})





app.listen(5000, ()=>{
console.log('listening on port 5000');
})