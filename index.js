var express = require("express")
var app = express()

app.get("/", (req, res)=>{
    res.send("<html><body><b>Welcome...</b></body></html>")
})

app.listen(8081,(err) =>{
    console.log('Server is listening on 8081..')
})