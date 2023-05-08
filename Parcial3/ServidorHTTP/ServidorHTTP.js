let http = require('http')

let servidor = http.createServer(function(req, res){
    res.write('Servidor HTTP y contestando rapido');
    res.end();
})

servidor.listen(8081, ()=>{console.log('El Servidor HTTP está Listo')});