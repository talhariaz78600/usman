const express = require('express');
const {ObjectId} = require('mongodb');
const router = express.Router();
const Home = require('../models/Home')
const Education= require('../models/Education')
const Department=require('../models/Department')
const Ethics=require('../models/Ethics')
const Love=require('../models/Love')
const Food=require('../models/Food')
const Solutions=require('../models/Solutions')
const Trade=require('../models/Trade')
///////////////////////create frist page document//////////////////
router.post('/homedata', async (req,res)=>{
    const title=req.body.title;
    const contentId=req.body.contentId;
    const page=req.body.page;
    const id=contentId;
    
    const success=false;
    let objectId;
  
    objectId = ObjectId.isValid(id) ? new ObjectId(id) : null;;
    try {
        if(title==='education'){

            const finddata = await Education.findOne({ _id: objectId }).select('_id');
            if(!finddata){
                return res.json({success});
            }
           }
           else if(title==='ethics'){
            const finddata = await Ethics.findOne({ _id: objectId }).select('_id');
            if(!finddata){
                return res.json({success});
            } 
           }
           else if(title==='trade'){
            const finddata = await Trade.findOne({ _id: objectId }).select('_id');
            if(!finddata){
                return res.json({success});
            } 
           }
           else if(title==='food'){
            const finddata = await Food.findOne({ _id: objectId }).select('_id');
            if(!finddata){
                return res.json({success});
            } 
           }
           else if(title==='solutions'){
            const finddata = await Solutions.findOne({ _id: objectId }).select('_id');
            if(!finddata){
                return res.json({success});
            } 
           }
           else if(title==='department'){
            const finddata = await Department.findOne({ _id: objectId }).select('_id');
            if(!finddata){
                return res.json({success});
            } 
           }
           else if(title==='love'){
            const finddata = await Love.findOne({ _id: objectId }).select('_id');
            if(!finddata){
                return res.json({success});
            }
           }
           else
           {
             
           }
         
        const homedata = await Home.create({
            title:title,
            contentId:contentId,
            page:page
          })
          const success=true;
          res.json({homedata,success})
    } catch (error) {
        res.status(400).json({success, error: 'Invalid ID or document not found' });;
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
    const contentId= req.params.id;
    let success = false;
    try {
        const finddata = await Home.findOneAndDelete({contentId});
        if(!finddata){
            return res.json({success,"message":"Item not found"});
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