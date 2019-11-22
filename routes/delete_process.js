var conn = require('../db_conn.js')();

module.exports = (req, res)=>{
    conn.query(
        `DELETE FROM posts WHERE id=${req.params.id}`, 
        (err, post)=>{
            return res.redirect('/');
    });
}