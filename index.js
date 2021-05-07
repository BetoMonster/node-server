const http =require('http')

const server = http.createServer((request, response)=>{
    console.log('url: ',request.url)
    response.write('Hola desde un servidor NODE')
    response.end()
})

server.listen(8080,() => {
    console.log('servidor escuchando en el puerto 8080')
})

//llamada a

//https:localhost:8080

