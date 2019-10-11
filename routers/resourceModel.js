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
    return db('projects as r')
        .join('resources as i', 'i.project_id', 'r.id')
        .select('i.name', 'i.quantity')
        .where({ project_id: id })
}