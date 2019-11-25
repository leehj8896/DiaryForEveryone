const models = require("../models");

module.exports = (req, res)=>{
    models.reply.destroy({
        where: {id: req.params.replyId}
    }).then(()=>{
        return res.redirect(`/detail/${req.params.postId}`);
    });
}