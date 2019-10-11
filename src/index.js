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
 app.get('/archivo.js',(req,res) => {
  // res.send('<h1> orale puto </h1>')
 res.sendFile(path.join(__dirname+'/views/archivo.js'));
});
app.get('/leer.js',(req,res) => {
  // res.send('<h1> orale puto </h1>')
 res.sendFile(path.join(__dirname+'/views/leer.js'));
});
app.get('/analizador.js',(req,res) => {
  // res.send('<h1> orale puto </h1>')
 res.sendFile(path.join(__dirname+'/views/analizador.js'));
});
app.get('/style.css',(req,res) => {
  // res.send('<h1> orale puto </h1>')
 res.sendFile(path.join(__dirname+'/views/style.css'));
});
app.get('/img/header.jpg',(req,res) => {
  // res.send('<h1> orale puto </h1>')
 res.sendFile(path.join(__dirname+'/views/img/header.jpg'));
});
app.get('/img/mountains.jpg',(req,res) => {
  // res.send('<h1> orale puto </h1>')
 res.sendFile(path.join(__dirname+'/views/img/mountains.jpg'));
});
app.get('/img/automata.png',(req,res) => {
  // res.send('<h1> orale puto </h1>')
 res.sendFile(path.join(__dirname+'/views/img/automata.png'));
});


//escucha
app.listen(app.get('port'), () =>{
    console.log(__dirname);
    console.log("escuchando en el puerto ", app.get('port'));
});