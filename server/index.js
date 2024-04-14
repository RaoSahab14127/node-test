// const http = require('http')
// const server= http.createServer((req, res)=>{
//     console.log(Date().now())
//     res.end("Hello");

// })

// server.listen(8000, ()=>{
//     console.log("Myserver is started")
// });


// const http= require('http');
// const fs= require('fs');

// const  server = http.createServer((req, res)=>{
//     fs.appendFile("log.txt", `New req recieve at ${Date.now()} and from ${req.headers.location} \n`,  (err)=>{
//         if (err){ err}
//         else{
//             switch(req.url){
//                 case "/": res.end("From /")
//                 break
//                 case "/about": res.end("From about")
//                 break
//                 default: res.end("404")
//         }
// }})


    
    
    
// })

// server.listen(8000, ()=>{console.log(`my server is started at ${Date.now()}`)})







const http= require('http');
const fs= require('fs');
const url = require('url');

const  server = http.createServer((req, res)=>{
    const myurl = url.parse(req.url, true)
    fs.appendFile("log.txt", `New req recieve at ${Date.now()} and from ${req.headers.location} \n`,  (err)=>{
        if (err){ err}
        else{
            switch(myurl.pathname){
                case "/": res.end(`From / `)
                break
                case "/about": res.end(`From about+ ${myurl.query.name}`)
                break
                default: res.end("404")
        }
}})


    
    
    
})

server.listen(8000, ()=>{console.log(`my server is started at ${Date.now()}`)})





