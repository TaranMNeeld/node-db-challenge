const db = require('../db-config.js');

module.exports = {
    addProject,
    getProjects,
    getProjectById
}

function addProject(project) {
    return db('projects')
        .insert(project, 'id')
}

function getProjects() {
    return db('projects')
}

function getProjectById(id) {
    return db('projects')
        .where({ id })
        .first()
}