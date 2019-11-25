const models = require("../models");

module.exports = (req, res) => {

    models.post.findOne({
        where: {
            id: req.params.id
        }
    }).then((post)=>{
        return res.render('update.pug', {
            post: post
        });
    });
    // conn.query(
    //     `SELECT * FROM posts WHERE id=${req.params.id}`, 
    //     (err, post)=>{
    //         return res.render('update.pug', {
    //             post: post
    //         });
    //     });
};
