const router = require('express').Router();
let Prospect = require('../models/prospect.model');

router.get('/', async (req, res) => {
    const prospects = await Prospect.find();
    res.send(prospects)
})

router.post('/', async (req, res) => {
    Prospect.create(req.body, function (err, post) {
        if (err) return console.log(err);
        res.json(post);
    })
})

module.exports = router;