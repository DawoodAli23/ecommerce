const express=require('express');
const app=express();
const PORT=3000;

// const db=require('./db')

app.use(express.json())

//product router
const produtRouter = require('./routes/product');
app.use('/product',produtRouter)

app.get('/',(req,res)=>{
    res.send("<h1>wow</h1>")
})
app.listen(PORT,()=>{
    console.log(`port is running at port ${PORT}`)
});