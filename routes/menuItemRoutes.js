const express= require('express')
const router= express.Router()

const MenuItem = require('./../models/MenuItem')

router.get('/menu', async function(req,res){
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

router.post('/menu', async (req, res) => {
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

// comment added






module.exports=router