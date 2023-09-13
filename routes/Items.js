const express = require('express');
const router = express.Router();
const {Items} = require('../models'); //For some reason adding "items" to the end of the link makes the frontend not work


router.get('/', async (req, res) => {
    const listOfItems = await Items.findAll()
    res.json(listOfItems);
});

router.get('/byId/:id', async(req,res) => {
    const id = req.params.id
    const item = await Items.findByPk(id)
    res.json(item)
})


router.post("/", async (req, res) => {
    const item = req.body;
    await Items.create(item);
    res.json(item);
});



module.exports = router;