var conn = require('../db_conn')();

module.exports = (req, res) => {
    conn.query(
        `SELECT * FROM posts WHERE id=${req.params.id}`, 
        (err, post)=>{
            return res.render('update.pug', {
                post: post
            });
        });
};
