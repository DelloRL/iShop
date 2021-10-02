const express = require("express");

const methodOverride = require('method-override');
const app = express();
const path = require('path')
let session = require('express-session');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')

app.use(express.urlencoded({extended: false}));
app.use(express.json());


const adminRoutes = require('./routes/adminRoutes.js');
const mainRoutes= require("./routes/mainRoutes.js");
const productsRoutes = require("./routes/products.js");
const usersRoutes = require('./routes/usersRoutes.js');
const cookieParser = require("cookie-parser");

// view engine setup //
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static('./public'));

app.use(methodOverride("_method"));

app.use(cookieParser());


// Objeto literal para acceder a todo lo que tenga en el req
app.use(session({
    secret: 'Es un secreto, y tu mirada y la mia un resentimiento',
    resave: false,
    saveUninitialized: false,
}))

// Middleware de aplicación
app.use(userLoggedMiddleware)

//Rutas
app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/', adminRoutes);
app.use('/', usersRoutes)


//servidor
app.listen(3080,() => {
    console.log("Servidor corriendo en el puerto 3080")
});

