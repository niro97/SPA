var express=require('express')
var path=require('path')
var app=express()
app.use(express.static(__dirname))
app.use('/index', express.static(path.join(__dirname, 'shoppingcart')))
app.get('/',function(req,res)
{

res.send('hello world')
})
app.listen(4000)
console.log("kk");