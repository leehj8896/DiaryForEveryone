const models = require("../models");

module.exports = (req, res)=>{
    models.post.destroy({
        where: {id: req.params.id}
    }).then(()=>{
        return res.redirect('/');
    });
}