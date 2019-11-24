var qs = require('querystring');
var crypto = require('crypto');
const models = require("../models");
var conn = require('../db_conn')();

module.exports = (req, res) => {
  var body = '';
  req.on('data', function(data){
      body = body + data;
  });
  req.on('end', function(){
    var data = qs.parse(body);

    models.user.findOne({
        whele: {
            email: data.email
        }
    }).then((result)=>{

        var hashedPassword = crypto.createHash("sha512").update(data.password + result.get('salt')).digest("hex");
        if(result.get('password') == hashedPassword){
            console.log('비밀번호 일치');
            req.session.nickname = result.get('nickname');
            res.redirect('/');
        }
        else{
            console.log('비밀번호 불일치');
            res.redirect('/login');
        }
      }).catch((err)=>{
        console.log(err);
      });
  });
};