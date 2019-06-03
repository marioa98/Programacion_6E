const express = require('express');
const app = express();



let port = process.env.PORT || 3000;
let status = {
    "error" : false,
    "status" : 200,
    "message" : "Smn"
}

app.get('/:id',(req, res)=>{
    res.send(`<html><head></head><body> <h1>${req.params.id}</h1> </body></html>`);
})

app.get('/',(req, res)=>{
    res.send(status)
})

app.get('/user/:id', (req, res)=>{
    if(req.params.id > 50){
        res.json({
            "error" : false,
            "status" : 200,
            "message" : "Smn"
        })
    }else{
        res.json({
            "error" : true,
            "status" : 200,
            "message" : "La cagaste"
        })
    }
})

app.listen(port);