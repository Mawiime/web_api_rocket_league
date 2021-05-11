const moves = require('../Model/moves')
const movesController = {}

movesController.getMoves = async (req,res)=> {
    try {
        const docs = await moves.list()
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}

movesController.getMove = async (req,res)=> {
    const id = parseInt(req.params.id)
    try {
        const docs = await moves.getOne(id)
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}

movesController.createMove = async (req,res)=> {
    try {
        const moveData = req.body
        const createdMove = moves.create(moveData)
        res.status(200).json(createdMove)
    } catch (err) {
        console.log(err)
        throw err
    }
}

movesController.updateMove = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        const replacementMove = req.body
        const modifiedMove = await moves.edit(id, replacementMove)
        res.status(200).json(modifiedMove)
    } catch (err) {
        console.log(err)
        throw err
    }
}

movesController.removeMove = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        await moves.destroy(id)
        res.status(200).json(moves)
    } catch (err) {
        console.log(err)
        throw err
    } 
}

module.exports = movesController