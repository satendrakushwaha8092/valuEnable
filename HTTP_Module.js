const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('hellow world');
        res.end();
}
});


server.listen(3000)

console.log('listing on port 3000...')