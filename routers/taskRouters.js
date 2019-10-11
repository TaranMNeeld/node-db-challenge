const express = require('express');

const taskModel = require('./taskModel.js');
const projectModel = require('./projectModel.js');

const router = express.Router();

router.post('/')

router.get('/', (req, res) => {
  taskModel.getTasks()
    .then(task => {
        res.json(task);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: 'Failed to get tasks from database' });
    });
});

//Middleware

function validateTask(req, res, next) {
  
};

module.exports = router;



