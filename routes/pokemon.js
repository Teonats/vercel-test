const router = require('express').Router()
const { getPokemonById } = require('../controllers/pokemon')

router.get('/id/:id', getPokemonById)

module.exports = router