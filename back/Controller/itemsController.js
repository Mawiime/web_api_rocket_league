const items = require('../Model/items')
const itemsController = {}

itemsController.getItems = async (req,res)=> {
    try {
        const docs = await items.list()
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}

itemsController.getItem = async (req,res)=> {
    const id = parseInt(req.params.id)
    try {
        const docs = await items.getOne(id)
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}

itemsController.createItem = async (req,res)=> {
    try {
        const itemData = req.body
        const createdItem = items.create(itemData)
        res.status(200).json(createdItem)
    } catch (err) {
        console.log(err)
        throw err
    }
}

itemsController.updateItem = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        const replacementItem = req.body
        const modifiedItem = await items.edit(id, replacementItem)
        res.status(200).json(modifiedItem)
    } catch (err) {
        console.log(err)
        throw err
    }
}

itemsController.removeItem = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        await items.destroy(id)
        res.status(200).json(items)
    } catch (err) {
        console.log(err)
        throw err
    } 
}

module.exports = itemsController