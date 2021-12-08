const express = require("express");
const dotenv = require("dotenv");


dotenv.config();

const host = process.env.HOST; 
const port = process.env.PORT;

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+"/public"));

app.post("/auth",(request,response)=>{
    const login_name = request.body.login_name;
    const password = request.body.password;
    //ternary
    let message = (login_name == process.env.LOGINNAME && password == process.env.PASSWORD) ? "ログインしました": "ログインできません。";
    
    
    response.send(message);
});

//app.get(URL,処理)
app.get("/",(request,response) => {
    console.log(request.body);
    console.log(request.url);
    console.log(request.query);
    response.send("Hello Express!");
});

app.get("/profile",(request,response)=>{
    response.send("<h1 style:background>This is Profile Page!!!</h1>");
});

app.listen(port,host, () =>{

    console.log(`Server listen: http://${host}:${port}/login.html`);
    //他の書き方
    // console.log("http://"+host+":"+port);
});