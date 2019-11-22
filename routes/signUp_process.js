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

    //salt: 현재 시간에 랜덤 값을 곱해 문자열 생성
    var salt = Math.round((new Date().valueOf() * Math.random())) + "";
    var hashedPassword = crypto.createHash("sha512").update(data.password + salt).digest("hex");

    models.user.create({
      email: data.email,
      password: hashedPassword,
      nickname: data.nickname,
      salt: salt
    }).then((result)=>{
      res.redirect(`/`);
    }).catch((err)=>{
      console.log(err);
    });
    // conn.query(
    //   `INSERT INTO users (email, password, nickname, salt)
    //   VALUES('${data.email}', '${hashedPassword}', '${data.nickname}', '${salt}')
    //   `, 
    //   (err, result)=>{
    //     if(err)
    //       console.log(err);
    //     return res.redirect(`/`);
    // });
  });
};