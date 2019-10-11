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
    return db('projects as p')
        .join('tasks as t', 't.project_id', 'p.id')
        .select('t.id', 't.project_id', 't.description', 't.notes', 't.completed')
        .where({ project_id: id })
}