const express = require("express");
const router = express.Router();
const item = require("./item");

//コントローラーファイルの読み込み
const homeController = require("./controllers/HomeController")
// const itemController = require("./controllers/ItemController")
// const loginController = require("./controllers/LoginController")
// const userController = require("./controllers/UserController")

//HomeController
router.get("/",homeController.index);
router.get("/profile",homeController.profile)

//ItemController
// router.get("/item/:id",itemController.show)

//UserController
// router.get("/user/edit/:id",userController.edit)



router.get("/login",(req,res)=>{
    let data ={}
    data.title = "ログイン"
    res.render("login/index.ejs",data)


router.get("/",(request,response)=> {
    response.send("Hello Express Router!!");
    
})
router.get("/profile",(request,response)=>{
    response.send("This is profile page")
})

router.post("/auth",(request,response)=>{
    const login_name = request.body.login_name;
    const password = request.body.password;
    let message = "ログインできませんでした"
    if(login_name == process.env.LOGIN_NAME && password == process.env.PASSWORD)
    {
        message = "ログインしました";
    }
    console.log(request.body);
    response.send(message);
})

router.get("/user/edit/:id",(request,response)=>{
    const id = request.params.id;
    response.send("user edit page: id =" +id);
})

//商品をIDで検索
router.get("/item/:id",(request,response)=>{
    const id = request.params.id;
    let message = "商品が見つかりませんでした"
    const _item = item.find(id)
    if(_item)
    {
        let _item = item.values[id];
        message = _item.name + "の値段は" + _item.price + "円です。";
    }
    response.send(message);
})

//Amazonの商品詳細
router.get("/dp/:id",(request,response)=>{
    const id = request.params.id;
    const message = "item ID is "+ id;
    response.send(message);
})

router.get("/ejs",(req,res)=>{
    let data = {}
    data.title = "トップページ"
    res.render("views/index.ejs",data)
})

router.get("/ejs/profile",(req,res)=>
{
    let data ={}
    data.title = "プロフィール"
    res.render("/profile/index.ejs",data)
})



})
module.exports = router;