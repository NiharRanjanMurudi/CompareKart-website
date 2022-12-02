const path=require('path')
const express = require('express')
const app =express()

// console.log(path.join(__dirname,"/public"))
// console.log(__dirname)
// app.use(express.static(staticPath))
const staticPath=path.join(__dirname,"/public")
app.use(express.static(staticPath))

app.get("/",(req,res)=>{
    res.send("hello from the express")
})

// app.get('/about',(req,res)=>{
//     // res.send("hello baby how are you")
//     res.send([{
//         id:1,name:"vinode"
//     },
// {
//     id:2,
//     name:"pranjal"
// }])
// })

app.listen(8000,()=>{
    console.log("listening to tehport at 8000")
})