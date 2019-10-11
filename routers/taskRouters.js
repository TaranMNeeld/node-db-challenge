const express = require('express');

const taskModel = require('./taskModel.js');
const projectModel = require('./projectModel.js');

const router = express.Router();

router.post('/:id/tasks', validateProjectId, validateTask, (req, res) => {
  const taskData = req.body;
  taskModel.addTask(taskData)
    .then(taskData => {
      res.json(taskData);
    })
})


router.get('/:id/tasks', validateProjectId, (req, res) => {
  const id = req.params.id;
  taskModel.getTasks(id)
    .then(tasks => {
      tasks.map(task => {
        if (task.completed === 0) {
          task.completed = 'false';
        } else if (task.completed === 1) {
          task.completed = 'true';
        }
      })
      res.json(tasks);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: 'Failed to get tasks from database' });
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

function validateTask(req, res, next) {
  const taskData = req.body;
  if (!taskData.description) {
    res.status(400).json({ errorMessage: "missing required description field" });
  } else if (!taskData.project_id) {
    res.status(400).json({ errorMessage: "missing required project_id field" });
  } else if (!taskData.completed) {
    taskData.completed = false;
  }
  next();
};

module.exports = router;



