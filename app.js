const express= require("express");
const mainRoutes= require("./routes/mainRoutes");
const logMiddleware = require('./middlewares/logMiddleware');


const app = express();


// view engine setup //
app.use(express.static('./public'));
app.set('view engine', 'ejs');

app.use(logMiddleware);

app.use('/', mainRoutes);

app.listen(3080,() => {
    console.log("Servidor corriendo en el puerto 3080")
});
