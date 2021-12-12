//Item.jsをよみこみ
const item = require("../Item")

//商品をIDで取得
exports.show = (req,res)=>{
    const id = req.params.id
    let data = {}
    data.title = "商品データ"
    data.item = null
    if(item.values[id])
    {
        data.item = item.values[id]
    }
    res.render("item/show.ejs",data)
}