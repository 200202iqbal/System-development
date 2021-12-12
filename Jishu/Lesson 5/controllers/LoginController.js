exports.index = (req,res) =>
{
    let data = {}
    data.title = "ログイン"
    res.render("login/index.ejs",data)
}

exports.auth = (req,res) =>
{
    const login_name = req.body.login_name
    const password = req.body.password
    let message = "ログインできません。"
    
}