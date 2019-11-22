var qs = require('querystring');
var conn = require('../db_conn')();

module.exports = (req, res) => {
  var body = '';
  req.on('data', function(data){
      body = body + data;
  });
  req.on('end', function(){
    var data = qs.parse(body);
    conn.query(
      `INSERT INTO posts (email, password, nickname)
      VALUES('${data.email}', '${data.password}', '${data.nickname}')
      `, 
      (err, result)=>{
        return res.redirect(`/`);
    });
  });
};