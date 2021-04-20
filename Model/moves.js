const connection = require('../moves.json')
const moves = {}

moves.list = async function(){
    return await Object.values(connection)
}

moves.getOne = async function (id) {
    const returnedMove = connection.find(move => move.id === id)
    return await returnedMove;
}

moves.create = async function (data) {
    return await connection.push(data)
}

moves.edit = function (id, data) {
    let move = connection.find(move => move.id === id)
    move.name = data.name
    move.videoLink = data.videoLink
}

moves.destroy = async function (id) {
    let move = moves.find(move => move.id === id)
    return await moves.splice(moves.indexOf(move),1)
}

module.exports = moves