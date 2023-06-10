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
app.get('/' ,(res,req)=>{
  res.send("this app is working")
})
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
server.timeout = 60000;