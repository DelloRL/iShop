const express= require("express");

const path= require("path");

const app = express();


app.listen(3080,() => {
    console.log("Servidor Corriendo")
});


app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.use(express.static("public"));