const express = require('express');
const app = express();
//const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
const PORT = 4200;//process.env.PORT;
const cors = require('cors');
const ServerPortRouter = require('./router/router');
const downloadRouter = require('./router/downloadRouter');

app.use(cors());
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());

app.use('/serverport', ServerPortRouter);
app.use('/serverport', downloadRouter);

app.listen(PORT, function(){
  console.log('Server is running on Port: ',PORT);
});