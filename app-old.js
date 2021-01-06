const http  = require('http');
http.createServer( (req , res)=>{
    res.writeHead(200, {'content-type':'application/json'});
    let empleada={
        nombre: 'Garce',
        apellido: 'Godoy',
        edad: 51,
        url: req.url

    }

    res.write(JSON.stringify(empleada));
    //res.write('Hola Grace')
    res.end()
})
.listen(8080);
console.log('Escuchando el puerto 8080');