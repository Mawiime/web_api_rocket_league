const express = require('express')
const movesController = require('./Controller/movesController')
const itemsController = require('./Controller/itemsController')
const workshopController = require('./Controller/workshopController')
const usersController = require('./Controller/usersController')
const router = express.Router()

router.get('/moves', movesController.getMoves)
router.get('/moves/:id', movesController.getMove)
router.post('/moves', movesController.createMove)
router.put('/moves/:id', movesController.updateMove)
router.delete('/moves/:id',movesController.removeMove)

router.get('/items', itemsController.getItems)
router.get('/items/:id', itemsController.getItem)
router.post('/items', itemsController.createItem)
router.put('/items/:id', itemsController.updateItem)
router.delete('/items/:id',itemsController.removeItem)

router.get('/workshop', workshopController.getMaps)
router.get('/workshop/:id', workshopController.getMap)
router.post('/workshop', workshopController.createMap)
router.put('/workshop/:id', workshopController.updateMap)
router.delete('/workshop/:id',workshopController.removeMap)


router.get('/users/:name',usersController.getUser)
module.exports = router