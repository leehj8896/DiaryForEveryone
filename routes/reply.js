var qs = require('querystring');
const models = require("../models");

module.exports = (req, res) => {
  var body = '';
  req.on('data', function(data){
      body = body + data;
  });
  req.on('end', function(){
    var data = qs.parse(body);

    models.reply.create({
      content: data.reply,
      userId: req.session.userId,
      postId: data.postId
    }).then((result)=>{
      res.redirect(`/detail/${data.postId}`);
    }).catch((err)=>{
      console.log(err);
    });
  });
};