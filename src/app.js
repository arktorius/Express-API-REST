import express from 'express'
import router from './routes/tasks.routes'



const app = express();


app.set('port', process.env.PORT || 3500)

app.get('/',(req,res)=>{
    res.json('hola mundo2')
})
app.use('/api',router)

export default app