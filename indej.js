const express=require('express');
const app = express();


app.get('/local', (req,res)=>{
    res.json('hola mundo ++')
})

app.listen(5000);