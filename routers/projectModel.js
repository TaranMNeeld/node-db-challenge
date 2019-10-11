const db = require('../db-config.js');

module.exports = {
    getProjectById
}

//join all three tables and display their contents based off the project id
function getProjectById(id) {
    return db('projects')
        .where({id})
}