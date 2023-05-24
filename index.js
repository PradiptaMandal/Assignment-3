const http = require('http');
const fs = require('fs');

fs.writeFile('index.html', "<h1> Hello World </h1><p> This is Pradipta Mandal... </p>", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("success")
    }
})


let server = http.createServer((req,res)=>{
    fs.readFile("index.html", (err,data)=>{
        res.write(data);
        res.end();
    })
})

server.listen(5000,()=>{
    console.log("server is listening on port 5000")
})