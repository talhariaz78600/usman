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
router.get('/gethomeeducation', async (req,res)=>{

    const title=req.header('title');
    let success=false;
    try {
        const data=await Home.find({title});
        success=true;
        res.json({data,success});
    } catch (error) {
        res.json({error,success});
    }
})
router.get('/gethomedepartment', async (req,res)=>{

    const title=req.header('title');
    let success=false;
    try {
        const data=await Home.find({title});
        success=true;
        res.json({data,success});
    } catch (error) {
        res.json({error,success});
    }
})
router.get('/gethomeethics', async (req,res)=>{

    const title=req.header('title');
    let success=false;
    try {
        const data=await Home.find({title});
        success=true;
        res.json({data,success});
    } catch (error) {
        res.json({error,success});
    }
})
router.get('/gethomefood', async (req,res)=>{

    const title=req.header('title');
    let success=false;
    try {
        const data=await Home.find({title});
        success=true;
        res.json({data,success});
    } catch (error) {
        res.json({error,success});
    }
})
router.get('/gethomelove', async (req,res)=>{

    const title=req.header('title');
    let success=false;
    try {
        const data=await Home.find({title});
        success=true;
        res.json({data,success});
    } catch (error) {
        res.json({error,success});
    }
})
router.get('/gethomesolutions', async (req,res)=>{

    const title=req.header('title');
    let success=false;
    try {
        const data=await Home.find({title});
        success=true;
        res.json({data,success});
    } catch (error) {
        res.json({error,success});
    }
})
router.get('/gethometrade', async (req,res)=>{

    const title=req.header('title');
    let success=false;
    try {
        const data=await Home.find({title});
        success=true;
        res.json({data,success});
    } catch (error) {
        res.json({error,success});
    }
})


router.delete('/deletehomedata/:id', async (req, res) => {
    const id = req.params.id;
    let success = false;
    try {
        const finddata = await Home.findByIdAndDelete(id);
        if(!finddata){
            return res.json({success,message:"Item not found"});
        }
        success = true;
        res.json({ finddata, success })

    } catch (error) {
        res.json({ error, success })
    }
})

////////////////////////////update education data/////////////////////////
router.put('/updatehomedata/:id', async (req, res) => {
    const title=req.body.title;
    const contentId=req.body.contentId;
    const page=req.body.page;
    const success=false;
    try {
        const newData = {}
        if (page) {
            newData.page = page;
        }
        if (contentId) {
            newData.contentId = contentId;
        }
        if (title) {
            newData.title = title;
        }
        edu = await Home.findByIdAndUpdate(req.params.id, { $set: newData }, { new: true })
        success = true;
        res.json({ edu, success })
    } catch (error) {
        res.json({ error, success });
    }

})
module.exports=router;