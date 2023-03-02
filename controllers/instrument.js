const router = require('express').Router()
const Instrument = require('../models/instrument')

router.get('/', async (req,res) => {
    try {
        const instruments = await Instrument.find()
        res.json(instruments)
    } catch(error) {
        console.log(error)
        res.status(400).json({'message': 'error creating resource'})
    }
})

router.post('/', async (req,res) => {
    try {
   console.log('BODY',req.body)
    const instrument = await new Instrument(req.body).save()
    res.json(instrument)
    } catch (error) {
    console.log(error)
    res.status(400).json({'message': 'error creating resource'})
    }
})

module.exports = router
