const models = require("../models");

module.exports = (req, res) => {
    models.post.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: models.user
        }
    }).then((post)=>{
        return res.render('detail.pug', {
            post: post
        });
    });
};
