require('dotenv').config();
const connectToMongo=require('./db');
const bodyParser = require('body-parser');
const cors=require('cors')
connectToMongo();   
const timeout = require('connect-timeout');
const express = require('express')
const app = express()
const port =process.env.port||5500;
app.use(bodyParser.json({ limit: '100mb' }));
app.get('/',(req,res)=>{
  res.send('<h1>Website is working</h1>')
})
app.use(express.json())
app.use(timeout('12s'));
app.use(cors());
//  available routes
app.use('/api/admin',require('./routes/admin'));
app.use('/api/home',require('./routes/home'));
app.use('/api/education',require('./routes/education'));
app.use('/api/ethics',require('./routes/ethics'));
app.use('/api/trade',require('./routes/trade'));
app.use('/api/food',require('./routes/food'));
app.use('/api/solutions',require('./routes/solutions'));
app.use('/api/department',require('./routes/department'));
app.use('/api/love',require('./routes/love'));
const server=app.listen(port, () => {
    console.log(`haltak app listening on port ${port}`)
    
  })
server.timeout = 100000;