const http =require('http')

const server = http.createServer((request, response)=>{
    console.log('url: ',request.url)
    console.log('method: ',request.method)
    
    //response.write('Hola desde un servidor NODE')

    if (request.url==='/koder'&& request.method==='GET'){
        response.write('aqui estan todos los koders')
    }else if (request.url==='/koder'&& request.method==='POST'){
        response.write('aqui puedes crear koders')
    }else{
        response.write('No estaba preparado para eso :c')
    }

    response.end()
})

server.listen(8080,() => {
    console.log('servidor escuchando en el puerto 8080')
})

//llamada a

//https:localhost:8080

//GET /koder -> aqui estan todos los koders
//POST / koder -> aqui pudes crear koders
//X/X -> No estaba preparado para eso :c
