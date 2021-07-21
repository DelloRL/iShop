const express= require("express");

const path= require("path");

const app = express();


app.listen(3080,() => {
    console.log("Servidor corriendo en el puerto 3080")
});


app.get("/Carrito",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/Carrito.html"))
});

app.use(express.static("public"));