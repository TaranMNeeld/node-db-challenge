const express = require('express');

const projectModel = require('./projectModel.js');

const router = express.Router();

router.get('/:id', validateProjectId, (req, res) => {
  const { id } = req.params;
  projectModel.getProjectById(id)
    .then(project => {
      if (project) {
        res.json(project);
      }
    })
    .catch(err => {
      res.status(500).json({ errorMessage: 'Failed to get project' });
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
module.exports = router;



