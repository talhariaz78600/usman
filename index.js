require('dotenv').config();
const connectToMongo=require('./db');
const bodyParser = require('body-parser');
const cors=require('cors')
connectToMongo();   
const express = require('express')
const app = express()
const port =process.env.port||5500;
app.use(bodyParser.json({ limit: '100mb' }));

app.use(express.json())
app.use(cors());
//  available routes
app.use('/api/admin',require('./routes/admin'));
app.use('/api/home',require('./routes/home'));
app.use('/api/education',require('./routes/education'));
app.use('/api/ethics',require('./routes/ethics'));
app.use('/api/trade',require('./routes/trade'));
app.use('/api/food',require('./routes/food'));
const server=app.listen(port, () => {
    console.log(`haltak app listening on port ${port}`)
    
  })
  server.timeout = 60000;