const express = require('express');

const projectModel = require('./projectModel.js');

const router = express.Router();

router.post('/', (req, res) => {
  const project = req.body;
  projectModel.addProject(project)
  .then(project => {
    res.json(project);
  })
})

router.get('/', (req, res) => {
  projectModel.getProjects()
    .then(projects => {
      projects.map(proj => {
        if (proj.completed === 0) {
          proj.completed = 'false';
        }
      })
        res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: 'Failed to get projects from database' });
    });
});

//Middleware

function validateProject(req, res, next) {
  
};

module.exports = router;



