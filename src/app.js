import express from 'express'
import router from './routes/tasks.routes'



const app = express();

//PORT
app.set('port', process.env.PORT || 3500)

//JSON
app.use(express.json());

//ROUTES
app.use('/api',router)

export default app