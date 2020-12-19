import express from 'express'
import router from './routes/tasks.routes'
import morgan from 'morgan'
import cors from 'cors'



const app = express();

//PORT
app.set('port', process.env.PORT || 3500)

//MIDLEWARE


app.use(morgan('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));//this is for HTML requests


//ROUTES
app.use('/api', router)

export default app