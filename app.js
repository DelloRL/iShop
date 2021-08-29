const express= require("express");
const mainRoutes= require("./routes/mainRoutes.js");
const products = require("./routes/products.js");
const logMiddleware = require('./middlewares/logMiddleware');
const methodOverride = require('method-override');
const app = express();

app.use(express.urlencoded({extende: false}));
app.use(express.json());



// view engine setup //
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(logMiddleware);
app.use('/', mainRoutes);
app.use("/products",products);
app.use(methodOverride("_method"));

//servidor
app.listen(3080,() => {
    console.log("Servidor corriendo en el puerto 3080")
});