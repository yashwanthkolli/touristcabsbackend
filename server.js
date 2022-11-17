const express = require('express');
const cors = require('cors');
const mongoose =require('mongoose');
const dotenv = require('dotenv');

const app = express();

dotenv.config();
const port = process.env.PORT || 5000;

const options = {useNewUrlParser:true, useUnifiedTopology: true }
mongoose.connect(
    process.env.ATLAS_USER,
    options
)
.then(()=>console.log('connected'))
.catch(e=>console.log(e));

app.use(express.json());
app.use(cors());

const requestRoute = require('./routes/request')
const toursRequestRoute = require('./routes/toursRequest')
const subscriptionRoute = require('./routes/subscription')
const userRoutes = require('./routes/users')

app.use('/request', requestRoute)
app.use('/subscribe', subscriptionRoute)
app.use('/user', userRoutes)
app.use('/tours', toursRequestRoute)

app.listen( port, ()=> console.log(`Server is connected in port ${port}`));