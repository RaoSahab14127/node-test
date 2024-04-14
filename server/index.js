const http = require('http')
const server= http.createServer((req, res)=>{
    console.log(new Date().getDate().toLocaleString())
    res.end("Hello");

})

server.listen(8000, ()=>{
    console.log("Myserver is started")
});