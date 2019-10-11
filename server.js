const express = require('express');
const helmet = require('helmet');

const projectRouters = require('./routers/projectRouters.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectRouters);

module.exports = server;