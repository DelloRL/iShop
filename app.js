const express= require("express");

const path= require("path");

const app = express();


app.listen(3080,() => {
    console.log("Servidor corriendo en el puerto 3080")
});

app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/LoginYRegistro.html"))
});

app.get("/detalles",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/detalle.html"))
});

<<<<<<< HEAD
app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
=======
app.get("/carrito",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/Carrito.html"))
>>>>>>> 2a49caf5b563071eabf3876386b1d9381cb8bf60
});

app.use(express.static("public"));