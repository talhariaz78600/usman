const express = require('express');
const router = express.Router();
const Home = require('../models/Home')

///////////////////////create frist page document//////////////////
router.post('/homedata', async (req,res)=>{
    const title=req.body.title;
    const content=req.body.content;
    const success=false;

    try {
        
        const homedata = await Home.create({
            title:title,
            content:content
          })
          const success=true;
          res.json({homedata,success})
    } catch (error) {
        res.json({error,success});
    }

})

module.exports=router;