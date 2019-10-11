const express = require('express');
const helmet = require('helmet');

const projectRouters = require('./routers/projectRouters.js');
const resourceRouters = require('./routers/resourceRouters.js');
const taskRouters = require('./routers/taskRouters.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectRouters);
server.use('/api/projects', resourceRouters);
server.use('/api/projects', taskRouters);

module.exports = server;