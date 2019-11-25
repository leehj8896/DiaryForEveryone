var qs = require('querystring');
const models = require("../models");

module.exports = (req, res) => {
  var body = '';
  req.on('data', function(data){
      body = body + data;
  });
  req.on('end', function(){
    var data = qs.parse(body);

    models.post.create({
      title: data.title,
      description: data.description,
      userId: req.session.userId
    }).then((result)=>{
      res.redirect(`/detail/${result.id}`);
    }).catch((err)=>{
      console.log(err);
    });
  });
};