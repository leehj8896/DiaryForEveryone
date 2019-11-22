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
      `INSERT INTO posts (title, description)
      VALUES('${data.title}', '${data.description}')
      `, 
      (err, result)=>{
        return res.redirect(`/detail/${result.insertId}`);
    });
  });
};