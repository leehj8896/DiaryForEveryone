var conn = require('../db_conn')();

module.exports = (req, res) => {
    conn.query(
        `SELECT * FROM posts WHERE id=${req.params.id}`, 
        (err, post)=>{
            if(err)
                console.log(err);
            return res.render('detail.pug', {
                post: post
            });
    });
};
