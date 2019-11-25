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

        models.reply.findAll({
            where: {
                postId: post.id
            },
            include: {
                model: models.user
            }
        }).then((replies)=>{
            console.log(replies);
            return res.render('detail.pug', {
                post: post,
                replies: replies
            });
        });
    });
};
