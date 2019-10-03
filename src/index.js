//imports

const express = require ('express');
const app = express();
const path = require('path');

//configuracion

app.set('port', 4000);


//rutas
/*app.use(require('./views/index.html'));
router.get('/',(req,res)=>{
    res.render('index',{max:15})
});*/
app.get('/',(req,res) => {
    res.send('<h1> servidor funcia </h1>')
   // res.render('index',{max: 15});
});
app.get('/hola',(req,res) => {
   // res.send('<h1> orale puto </h1>')
  res.sendFile(path.join(__dirname+'/views/index.html'));
});
app.get('/info.html',(req,res) => {
    // res.send('<h1> orale puto </h1>')
   res.sendFile(path.join(__dirname+'/views/info.html'));
 });
 app.get('/analizador.html',(req,res) => {
    // res.send('<h1> orale puto </h1>')
   res.sendFile(path.join(__dirname+'/views/analizador.html'));
 });


//escucha
app.listen(app.get('port'), () =>{
    console.log(__dirname);
    console.log("escuchando en el puerto ", app.get('port'));
});