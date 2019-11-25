var conn = require('../db_conn')();
const models = require("../models");

module.exports = (req, res) => {
    models.post.findAll({
        include: {
            model: models.user
        }
    }).then((posts)=>{
        return res.render('index.pug', {
            posts: posts
        });
    });
};