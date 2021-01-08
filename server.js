const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(__dirname  + '/carpetajson'))

// app.get('/',function(req, res){

//     let empleada={
//         nombre: 'Garce',
//         apellido: 'Godoy',
//         edad: 51,
//         url: req.url

//     }
//     res.send(empleada)
//     //res.send('Hola Ruth')

// });
// app.get('/data',function(req, res){

 
    
//     res.send('Hola data')

// });

// app.get('/time',function(req, res){

    
//     res.send('Hola time')

// });

app.listen(port,()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
});