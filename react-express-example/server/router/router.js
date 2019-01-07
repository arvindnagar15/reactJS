const express = require('express');
const app = express();
const ServerPortRouter = express.Router();

ServerPortRouter.route('/add').post(function (req, res) {
    console.log('inside add method...');
    res.send([
        {id: 1, name : "Arvind"},
        {id: 2, name : "Praveen"},
        {id: 3, name : "Rakesh"}
    ])
  });
  module.exports = ServerPortRouter;