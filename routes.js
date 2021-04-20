const express = require('express')
const movesController = require('./Controller/movesController')
const router = express.Router()

router.get('/moves', movesController.getMoves)
router.get('/moves/:id', movesController.getMove)
router.post('/moves', movesController.createMove)
router.put('/moves/:id', movesController.updateMove)
router.delete('/moves/:id',movesController.removeMove)

module.exports = router