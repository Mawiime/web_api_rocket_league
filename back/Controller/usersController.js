const users = require('../Model/users')
const usersController = {}



usersController.getUser = async (req,res)=> {
    const name = req.params.name
    try {
        const docs = await users.getOne(name)
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}

module.exports = usersController