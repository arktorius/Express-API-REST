import { config } from 'dotenv'

config();


export default {
    dbURL: process.env.MONGODB_URI || 'mongodb://localhost/localDb'
}