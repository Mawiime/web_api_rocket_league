const connection = require('../Data/items.json')
const fs = require('fs')
const items = {}

items.list = async function(){
    return await Object.values(connection)
}

items.getOne = async function (id) {
    const returnedItem = connection.find(item => item.id === id)
    return await returnedItem;
}

items.create = async function (data) {
    var lastItem = Object.keys(connection).sort().reverse()[0]
    var lastId = connection[lastItem].id

    data.id = parseInt(lastId) + 1
    return await connection.push(data)
}

items.edit = function (id, data) {
    let item = connection.find(item => item.id === id)

    if(data.itemName != undefined)
        item.itemName = data.itemName
    
    if(data.itemType != undefined)
        item.itemType = data.itemType

    if(data.itemImage != undefined)
        item.itemImage = data.itemImage
}

items.destroy = async function (id) {
    let item = connection.find(item => item.id === id)
    return await connection.splice(connection.indexOf(item),1)
}

setInterval(refresh, 3000)

module.exports = items

function refresh()
{
    fs.writeFile('./Data/items.json', JSON.stringify(connection, null, 4), (err) => {
        if(err)
            console.log(err)
    })
}