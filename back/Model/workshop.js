const connection = require('../Data/workshop.json')
const fs = require('fs')
const workshop = {}

workshop.list = async function(){
    return await Object.values(connection)
}

workshop.getOne = async function (id) {
    const returnedItem = connection.find(item => item.id === id)
    return await returnedItem;
}

workshop.create = async function (data) {
    var lastMap = Object.keys(connection).sort().reverse()[0]
    var lastId = connection[lastMap].id

    data.id = parseInt(lastId) + 1
    return await connection.push(data)
}

workshop.edit = function (id, data) {
    let map = connection.find(map => map.id === id)

    if(data.name != undefined)
        map.name = data.name
    
    if(data.link != undefined)
        map.link = data.link

    if(data.tab != undefined)
        map.tag = data.tag
}

workshop.destroy = async function (id) {
    let map = connection.find(map => map.id === id)
    return connection.splice(connection.indexOf(map),1)
}

setInterval(refresh, 3000)

module.exports = workshop

function refresh()
{
    fs.writeFile('./Data/workshop.json', JSON.stringify(connection, null, 4), (err) => {
        if(err)
            console.log(err)
    })
}