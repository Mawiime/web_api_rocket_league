const maps = require('../Model/workshop')
const workshopController = {}

workshopController.getMaps = async (req,res)=> {
    try {
        const docs = await maps.list()
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}

workshopController.getMap = async (req,res)=> {
    const id = parseInt(req.params.id)
    try {
        const docs = await maps.getOne(id)
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}

workshopController.createMap = async (req,res)=> {
    try {
        const mapData = req.body
        const createdMap = maps.create(mapData)
        res.status(200).json(createdMap)
    } catch (err) {
        console.log(err)
        throw err
    }
}

workshopController.updateMap = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        const replacementMap = req.body
        const modifiedMap = await maps.edit(id, replacementMap)
        res.status(200).json(modifiedMap)
    } catch (err) {
        console.log(err)
        throw err
    }
}

workshopController.removeMap = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        await maps.destroy(id)
        res.status(200).json(maps)
    } catch (err) {
        console.log(err)
        throw err
    } 
}

module.exports = workshopController