// https://www.codementor.io/tips/9172397814/setup-file-uploading-in-an-express-js-application-using-multer-js
// https://stackoverflow.com/questions/27785896/use-multer-in-express-route-using-meanjs
// https://github.com/expressjs/multer
// https://github.com/mscdex/busboy
// https://ewiggin.gitbooks.io/expressjs-middleware/content/multer.html

const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const multerOptions = {
  storage: multer.memoryStorage(),
  fileFilter(req, file, next) {
    const isPhoto = file.mimetype.startsWith('image/');
    if(isPhoto) {
      next(null, true);
    } else {
      next({ message: 'That filetype isn\'t allowed!'}, false);
    }
  }
};

// view engine setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));


// To use multer simply to get metadata:
// 1. Require Multer
// 2. In your html put this into the entype attribute on your form tag enctype="multipart/form-data"
// 3. Use a method like single to determine how many files to manage
// 4. Call either programmatically or through hard coding the fields for multer to parse through
// 5. Now use the request.file or req.file to access the file data

app.get("/", function (req, res) {
  res.render('index', {});
});

// app.post("/",multer().single('pic'), function (req, res, next) {
//   // console.log(req.body); //form field
//   console.log(req.file); //form files
//   next();
// }, function(req, res, next) {
//   console.log('solid');
//   res.json({'yo':'dawg33'});
// });

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
