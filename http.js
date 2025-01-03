//importando o módulo http
const http = require('http');

//criar o servidor

const server = http.createServer((req, res) => {

    //configurar resposta

    res.statusCode = 200; //status code 200 OK

    res.setHeader('Content-Type', 'text/plain'); //define o tipo de conteúdo

    res.end('Hello World!'); //envia a resposta

});

//subir o servidor
server.listen(5000);