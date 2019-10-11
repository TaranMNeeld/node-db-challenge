const express = require('express');

const resourceModel = require('./resourceModel.js');

const router = express.Router();

router.post('/')

router.get('/', (req, res) => {
  const id = req.params;
  resourceModel.getResources(id)
    .then(project => {
      if (project) {
        res.json(project);
      }
    })
    .catch(err => {
      res.status(500).json({ errorMessage: 'Failed to get resources from database' });
    });
});

//Middleware

function validateResource(req, res, next) {
  
};

module.exports = router;



