import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRoutes from './routes/auth.route.js'
import { db, query } from './config/db.js';

// Express server initialisation
const app = express();

// Middlewares
// Json middleware so we can retrive back data from res object in json format
app.use(express.json())
// Cookie parser middleware helps with cookies 
app.use(cookieParser());
// Cors middleware helps with cors errors in browser
app.use(cors({}));


// Routes
app.use('/api',authRoutes)


app.listen(3001,()=>{
    console.log('server is up and runing!')
})