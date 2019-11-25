var qs = require('querystring');
const models = require("../models");

module.exports = (req, res)=>{
    var body = '';
    req.on('data', function(data){
        body = body + data;
    });
    req.on('end', function(){
      var data = qs.parse(body);

      models.post.update({
        title: data.title,
        description: data.description
      },{
        where: {
          id: data.id
        }
      }).then((post)=>{
        console.log(post);
        return res.redirect(`/detail/${data.id}`);
      });
    });
};
