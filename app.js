const express= require("express");

const logMiddleware = require('./middlewares/logMiddleware');
const app = express();


// view engine setup //
app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.use(logMiddleware);

const productsRoutes = require('./routes/products')
const mainRoutes= require("./routes/mainRoutes");
app.use('/', mainRoutes);
app.use('/', productsRoutes)

//servidor
app.listen(3080,() => {
    console.log("Servidor corriendo en el puerto 3080")
});
