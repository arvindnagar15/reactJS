const express = require('express');
const app = express();
const downloadRouter = express.Router();

downloadRouter.route('/download').post(function (req, res) {
    console.log('inside download method...');
    res.send([
        {id: 1, name : "Arvind"},
        {id: 2, name : "Praveen"},
        {id: 3, name : "Rakesh"}
    ])
  });
  module.exports = downloadRouter;