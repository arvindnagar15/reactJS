const express = require('express');
const path = require('path');
//const favicon = require('serve-favicon');
//const logger = require('morgan');
//const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors'); // addition we make
const fileUpload = require('express-fileupload'); //addition we make

//const index = require('./routes/index');
//const users = require('./routes/users');
console.log("Inside this method... 1111")
const app = express();
app.use(cors());
app.use(fileUpload());
console.log("Inside this method... 2222")

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log("Inside this method... 3333")
//app.use(cookieParser());

// Use CORS and File Upload modules here


app.use('/public', express.static(__dirname + '/public'));
console.log("Inside this method... 4444", __dirname)
//app.use('/', index);


// POST method route
app.post('/upload', function (req, res) {
    console.log("Inside this method... Router")


    let uploadFile = req.files.file
    console.log("Inside this method... Router", uploadFile)
    const fileName = req.files.file.name
    console.log("Inside this method... Router222",fileName)
    
    uploadFile.mv("./upload/"+fileName, function(error){
      if(error){
        console.log("Error occurred : "+error);
        res.send("Error occurred");
      }else{
        console.log("Successsfully transferred : ");
        res.send("Successsfully transferred : ");
      }
    })

    //res.send('POST request to the homepage')
    //next()
  })

console.log('in serve again....')

// catch 404 and forward to error handler
app.use(function(req, res, next) {
const err = new Error('Not Found');
err.status = 404;
next(err);
});

// error handler
app.use(function(err, req, res, next) {
// set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};

// render the error page
res.status(err.status || 500);
res.json({
  message: err.message,
  error: err
});
});



/**
 * Get port from environment and store in Express.
 */

// 3000 by default, we change it to 4000

var port = 4000;
app.set('port', port);

app.listen(port, () => console.log(`Server listeningGGGGGG on port ${port}`));

module.exports = app;