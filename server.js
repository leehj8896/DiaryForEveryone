const express = require('express');
const session = require('express-session');
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

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(session({
  key: 'sid',
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60 * 60 * 1000  //1hour
  }
}));
app.use((req, res, next)=>{
  res.locals.session = req.session;
  next();
});

var indexRouter = require('./routes/index.js');
var detailRouter = require('./routes/detail.js');
var createRouter = require('./routes/create.js');
var cpRouter = require('./routes/create_process.js');
var updateRouter = require('./routes/update.js');
var upRouter = require('./routes/update_process.js');
var dpRouter = require('./routes/delete_process.js');
var joinRouter = require('./routes/join.js');
var jpRouter = require('./routes/join_process.js');
var loginRouter = require('./routes/login.js');
var lpRouter = require('./routes/login_process.js');
var logoutRouter = require('./routes/logout.js');

app.get('/', indexRouter);
app.get('/detail/:id', detailRouter);
app.get('/create', createRouter);
app.post('/create_process', cpRouter);
app.get('/update/:id', updateRouter);
app.post('/update_process', upRouter);
app.get('/delete_process/:id', dpRouter);
app.get('/join', joinRouter);
app.post('/join_process', jpRouter);
app.get('/login', loginRouter);
app.post('/login_process', lpRouter);
app.get('/logout', logoutRouter);

app.listen(3000, ()=> {
  console.log('Example app listening on port 3000!');
});