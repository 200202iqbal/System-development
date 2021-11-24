const http = require("http");
require("dotenv").config();

const fs = require("fs");
const html = fs.readFileSync("index.html");

const querystring = require("querystring");

const port = process.env.PORT;
const host = process.env.HOST;

const message = "Hello YSE";

// サーバーを作成する
const app = http.createServer(function(request,respone){
    //HTTPヘッダ
    respone.writeHead(200,{'Content-Type':'text/html'});

    //レスポンス書き込み
    // respone.write("\
    // <div><h1>Home Page</h1></div>")
    
    // respone.write(message);

    let post = "";
    request.on("data",(value)=>{
        //受信データをキャッシュ
        post+= value;
    });

    request.on("end",()=>{
        if(post){
            post = querystring.parse(post);
            console.log(post);
        }
    })
    //レスポンスを閉じる
    respone.end(html);

    console.log(`Method: ${request.method}`);
    console.log(`Response: ${message}`);
    console.log(`URL: ${request.url}`);

});

//ホストとポートを指定して監視
app.listen(port,host);
console.log(`Server listen: http://${host}:${port}`);