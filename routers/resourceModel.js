const db = require('../db-Config.js');

module.exports = {
    addResource,
    getResources
}

function addResource(resource) {
    return db('resources')
        .insert(resource, 'id')
}

function getResources(id) {
    return db('projects as p')
        .join('resources as r', 'r.project_id', 'p.id')
        .select('r.id', 'r.name', 'r.description')
        .where({ project_id: id })
}