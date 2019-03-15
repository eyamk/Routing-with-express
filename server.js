const express=require('express')
const app=express()





app.use(date=(req,res,next)=>{  
 var d = new Date();
 var n = d.getHours();
 if((n<8) || (n>17)){
 console.log('Our office is not open now')
 res.send('Our office is not open now')
 }
next()
})

app.use(express.static(__dirname+'/public'))



app.listen(3000,(err)=>{
    if(err) console.log("server is not running")
    else console.log("server is running on port 3000")
})