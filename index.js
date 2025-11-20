const express = require('express')
const app = express()
app.use(express.json())



// --------------------- Get data only 
app.get('/' , (req, res)=>{
    res.send("Hello world")
})



// --------------------- Post data Registration 
app.post('/register', (req , res)=>{
    res.send('hello world')
})


// --------------------- Post data Login 
app.post('/login', (req , res)=>{
    res.send('hello world')
})

app.listen(8000, ()=>{
    console.log("Server is running")
})