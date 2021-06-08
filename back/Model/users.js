const connection = require('../Data/users.json')
const fs = require('fs')
const users = {}

users.getOne = async function (username) {
    const returnedUser = connection.find(user => user.username === username)
    return await returnedUser;
}

module.exports = users
