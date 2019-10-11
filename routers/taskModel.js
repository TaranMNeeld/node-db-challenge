const db = require('../db-Config.js');

module.exports = {
    addTask,
    getTasks
}

function addTask(task) {
    return db('tasks')
        .insert(task, 'id')
}

function getTasks(id) {
    return db('projects')
        .select('tasks')
        .where({ id })
}