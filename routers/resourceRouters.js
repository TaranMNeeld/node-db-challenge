const express = require('express');

const resourceModel = require('./resourceModel.js');
const projectModel = require('./projectModel.js');

const router = express.Router();

router.post('/:id/resources', validateProjectId, validateResource, (req, res) => {
    const resourceData = req.body;
    resourceModel.addResource(resourceData)
        .then(resourceData => {
            res.json(resourceData);
        })
})

router.get('/:id/resources', validateProjectId, (req, res) => {
    const id = req.params.id;
    resourceModel.getResources(id)
        .then(resources => {
            res.json(resources);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to get resources from database' });
        });
});

//Middleware

function validateProjectId(req, res, next) {
    const id = req.params.id;
    projectModel.getProjectById(id)
        .then(project => {
            if (project[0]) {
                console.log('id validated');
            }
        })
        .catch(err => {
            res.status(400).json({ errorMessage: 'project id is invalid' });
        })
    next();
};

function validateResource(req, res, next) {
    const resourceData = req.body;
    const id = req.params.id;
    if (!resourceData.name) {
        res.status(400).json({ errorMessage: "missing required name field" });
    } else if (!resourceData.project_id) {
        resourceData.project_id = id;
    }
    next();
};

module.exports = router;



