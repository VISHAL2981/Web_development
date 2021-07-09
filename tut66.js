const http = require('http');
const fs = require('fs');
const filecontent = fs.readFileSync("tut48.html")
const Server = http.createServer(( req, res) => {res.writeHead(200, {'Content-Type': 'text/html'});
res.end(filecontent);
})
Server.listen ('80','127.0.0.1',()=>{
    
    console.log("listen on port80")})