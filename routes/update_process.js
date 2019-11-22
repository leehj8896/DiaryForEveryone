var qs = require('querystring');
var conn = require('../db_conn')();

module.exports = (req, res)=>{
    var body = '';
    req.on('data', function(data){
        body = body + data;
    });
    req.on('end', function(){
      var data = qs.parse(body);
      conn.query(
        `UPDATE posts
        SET title='${data.title}', description='${data.description}'
        WHERE id=${data.id}
        `, 
        (err, result)=>{
          return res.redirect(`/detail/${data.id}`);
      });
    });
};
