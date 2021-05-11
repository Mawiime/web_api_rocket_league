const connection = require('../moves.json')
const fs = require('fs')
const moves = {}

moves.list = async function(){
    return await Object.values(connection)
}

moves.getOne = async function (id) {
    const returnedMove = connection.find(move => move.id === id)
    return await returnedMove;
}

moves.create = async function (data) {
    var lastMove = Object.keys(connection).sort().reverse()[0]
    var lastId = connection[lastMove].id

    data.id = parseInt(lastId) + 1
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

setInterval(refresh, 3000)

module.exports = moves

function refresh()
{
    fs.writeFile('./moves.json', JSON.stringify(connection, null, 4), (err) => {
        if(err)
            console.log(err)
    })
}