const express = require('express');
const url = require('url');
var mysql = require('mysql'); 
var qs = require('querystring');
var path = require('path');
var template = require('./lib/template.js');

const models = require('./models/index.js');
models.sequelize.sync().then( ()=>{
  console.log("시퀄라이즈 성공");
}).catch(err=>{
  console.log("시퀄라이즈 실패");
  console.log(err);
});

var indexRouter = require('./routes/index.js');
var detailRouter = require('./routes/detail.js');
var createRouter = require('./routes/create.js');
var cpRouter = require('./routes/create_process.js');
var updateRouter = require('./routes/update.js');
var upRouter = require('./routes/update_process.js');
var dpRouter = require('./routes/delete_process.js');
var signUpRouter = require('./routes/signUp.js');
var spRouter = require('./routes/signUp_process.js');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.get('/', indexRouter);
app.get('/detail/:id', detailRouter);
app.get('/create', createRouter);
app.post('/create_process', cpRouter);
app.get('/update/:id', updateRouter);
app.post('/update_process', upRouter);
app.get('/delete_process/:id', dpRouter);
app.get('/signUp', signUpRouter);
app.post('/signUp_process', spRouter);

app.listen(3000, ()=> {
  console.log('Example app listening on port 3000!');
});