const express= require("express");

const path= require("path");

const app = express();


app.listen(3080,() => {
    console.log("El hamster corre")
});


app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.use(express.static("public"));