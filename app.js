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

app.get("/detalle",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/detalle.html"))
});

app.get("/carrito",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/Carrito.html"))
});
app.get("/iphones", (req,res) => {
    res.sendFile(path.join(__dirname + "/views/storeiPhone.html"))
})
app.get("/fundas", (req,res) => {
    res.sendFile(path.join(__dirname + "/views/storeFundas.html"))
})
app.get("/auriculares", (req,res) => {
    res.sendFile(path.join(__dirname + "/views/storeAuriculares.html"))
})

app.use(express.static("public"));