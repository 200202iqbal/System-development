const express = require("express")
const router = express.Router()
const item = require("./models/item")

router.get("/",(req,res)=>{
    let data = {}
    data.title = "トップページ"
    res.render("index.ejs",data);
})

router.get("/profile-ejs",(req,res)=>{
    let data = {}
    data.title = "プロフィール"
    res.render("profile/index.ejs",data);
})
router.get("/login",(req,res)=>{
    let data = {}
    data.title = "プロフィール"
    res.render("login/login.ejs",data);
})

router.get("/profile",(req,res)=>{
    res.send("This is Profile Page");
})

router.post("/auth",(req,res)=>{
    const login_name = req.body.login_name;
    const password = req.body.password;

    let message = "ログインできませんでした。"
    if(login_name == process.env.LOGIN_NAME && password == process.env.PASSWORD)
    {
        message = "ログインしました"
    }
    res.send(message)
})

router.get("/item/",(req,res)=>{
    const items = item.get();
    res.send(items);
})

router.get("/item/:id",(req,res)=>{
    let message = "商品が見つかりませんでした。";
    const id = req.params.id;
    const _item = item.find(id);
    if(_item)
    {
        message = _item.name + "の値段" + _item.price + "円";
    }
    res.send(message);
})

module.exports = router