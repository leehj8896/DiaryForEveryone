module.exports = (req, res)=>{
    req.session.destroy();
    res.clearCookie('sid');
    res.redirect('/');
}