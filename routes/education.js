const express = require('express');
const router = express.Router();
const Home = require('../models/Education')

///////////////////////////create education page document//////////////////////
router.post('/educationdata', async (req, res) => {
    const topic = req.body.topic;
    const picture = req.body.picture;
    // const link=req.body.link;
    const title = req.body.title;
    const content = req.body.content;
    let success = false;

    try {

        const educationdata = await Home.create({
            title: title,
            content: content,
            topic: topic,
            picture: picture,
            // link:link

        })
        success = true;
        res.json({ educationdata, success })
    } catch (error) {
        res.json({ error, success });
    }

})
/////////////////////get education data/////////////////////////////////////////
router.get('/geteducationdata', async (req, res) => {

    const topic = req.header('topic')
    let success = false;
    const pageNumber = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 1;

    const skip = (pageNumber - 1) * pageSize;
    
    let stop;
    try {
        stop= await Home.countDocuments();

        const finddata = await Home.find({ topic }).skip(skip)
            .limit(pageSize)
                success = true;
                res.json({ finddata, success,skip,stop })


            } catch (error) {
                res.json({ error, success })
            }
    })
////////////////////////////////////get single content data//////////////////////
router.get('/singleeducation/:id',async (req,res)=>{
    const id=req.params.id;
    let success = false;
    try {
        const finddata = await Home.findById(id);

        success = true;
        if (!finddata) {
            return res.status(404).send('Content not found');
          }
        res.json({ finddata, success })

    } catch (error) {
        res.json({ error, success })
    }
})
/////////////////////////////////delete education data//////////////////////
router.delete('/deleteeducation/:id', async (req, res) => {
    const id = req.params.id;
    let success = false;
    try {
        const finddata = await Home.findByIdAndDelete(id);
        success = true;
        res.json({ finddata, success })

    } catch (error) {
        res.json({ error, success })
    }
})

////////////////////////////update education data/////////////////////////
router.put('/updateeducationdata/:id', async (req, res) => {

    const picture = req.body.picture;
    const link = req.body.link;
    const title = req.body.title;
    const content = req.body.content;
    let success = false;

    try {
        const newData = {}
        if (picture) {
            newData.picture = picture;
        }
        if (link) {
            newData.link = link;
        }
        if (title) {
            newData.title = title;
        }
        if (content) {
            newData.content = content;
        }
        edu = await Home.findByIdAndUpdate(req.params.id, { $set: newData }, { new: true })
        success = true;
        res.json({ edu, success })
    } catch (error) {
        res.json({ error, success });
    }

})

module.exports = router;