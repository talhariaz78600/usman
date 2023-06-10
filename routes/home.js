const express = require('express');
const router = express.Router();
const Home = require('../models/Home')

///////////////////////create frist page document//////////////////
router.post('/homedata', async (req,res)=>{
    const title=req.body.title;
    const contentId=req.body.contentId;
    const page=req.body.page;
    const success=false;

    try {
        
        const homedata = await Home.create({
            title:title,
            contentId:contentId,
            page:page
          })
          const success=true;
          res.json({homedata,success})
    } catch (error) {
        res.json({error,success});
    }

})
router.get('/gethomedata', async (req,res)=>{

    const page=req.header('page');
    let success=false;
    try {
        const data=await Home.find({page});
        success=true;
        res.json({data,success});
    } catch (error) {
        res.json({error,success});
    }
})

module.exports=router;