const express= require("express");
const mainRoutes= require("./routes/mainRoutes.js");
const products = require("./routes/products.js");
const logMiddleware = require('./middlewares/logMiddleware');
const methodOverride = require('method-override');
const app = express();
const path = require('path')
let session = require('express-session');

app.use(express.urlencoded({extende: false}));
app.use(express.json());



// view engine setup //
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static('./public'));

app.use(methodOverride("_method"));
app.use(session({secret: 'Secreto' /*Acá se identifica el sitio web y la información que se guarde del usuario*/}));

app.use('/', mainRoutes);
app.use("/products", products);

//servidor
app.listen(3080,() => {
    console.log("Servidor corriendo en el puerto 3080")
});