const express = require('express');

const projectModel = require('./projectModel.js');

const router = express.Router();

router.post('/', validateProject, (req, res) => {
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
        } else if (proj.completed === 1) {
          proj.completed = 'true';
        }
      })
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: 'Failed to get projects from database' });
    });
});

router.get('/:id', validateProjectId, (req, res) => {
  const id  = req.params.id;
  projectModel.getProjectById(id)
    .then(project => {
      if (project) {
        res.json(project);
      }
    })
    .catch(err => {
      res.status(500).json({ errorMessage: 'Failed to get project from database' });
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

function validateProject(req, res, next) {
  const projectData = req.body;
  if (!projectData.name) {
    res.status(400).json({ errorMessage: "missing required name field" });
  } else if (!projectData.completed) {
    projectData.completed = false;
  }
  next();
};

module.exports = router;



