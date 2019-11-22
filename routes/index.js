var conn = require('../db_conn')();

module.exports = (req, res) => {
    conn.query('SELECT * FROM posts', (err, posts)=>{
        return res.render('index.pug', {
            posts: posts
        });
    });
};