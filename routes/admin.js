const express = require('express');
const fetchadmin = require('../middleware/fetchstudent')
const router = express.Router();
const Admin = require('../models/Admin')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_secret = "Talhaisintelligent";
///////////////////////////////////create a admin:get"/api/admin/createadmin"/////////////////
router.post('/createadmin', [
    body('adminname', 'password must be atleat 5 character').isLength({ min: 5 }),
    body('idcard', 'password must be atleat 13 character').isLength({ min: 13 }),
    body('email', 'please enter the valid email').isEmail(),
    body('password', 'password must be atleat 5 character').isLength({ min: 5 }),
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const numSaltRounds = await bcrypt.genSalt(8);
      const sacpassword = req.body.password;
      const Password = await bcrypt.hash(sacpassword, numSaltRounds);
      const admin = await Admin.create({
        adminname: req.body.adminname,
        idcard: req.body.idcard,
        password: Password,
        email: req.body.email,
      })
      const data = {
        admin: {
          id: admin.id
        }
      }
      var authtokent = jwt.sign(data, JWT_secret);
      res.json({ authtokent });
    } catch (error) {
      res.json({ error: "please enter the valid credential" })
    }
  }
  )
//////////////////////////////////////Login admin:get"/api/admin/adminlogin"////////////////////////////////

router.post('/adminlogin', [
    body('adminname').exists(),
    body('email', 'please enter the valid email').isEmail(),
    body('password').exists(),
    body('idcard').exists(),

  ], async (req, res) => {
    const errors = validationResult(req);
    let success=false;
    // console.log(req.body);
    if (!errors.isEmpty()) {

      return res.status(400).json({success, errors: errors.array() });
    }
    try {
      const {adminname, email, password,idcard } = req.body;
      let admin = await Admin.findOne({ email,adminname,idcard });
      if (!admin) {
        return res.status(400).json({success, error: "please try to login correct credentals" })
      }
      const passwordcompare = await bcrypt.compare(password, admin.password);
      if (!passwordcompare) {
        return res.status(400).json({success, error: "please try to login correct credentals" });
      }
      const data = {
        admin: {
          id: admin.id
        }
      }
      success=true;
      var authtoken = jwt.sign(data, JWT_secret);
      res.json({authtoken,success})
  
    } catch (error) {
      console.error(error.message);
      res.json({ error: "please enter the valid credential" })
    }
  
  }
  )
///////////////////////fetchadmin :post"/api/admin/fetchadmin"////////////////////////////
router.post('/fetchadmin', fetchadmin, async (req, res) => {
    let success=false
    try {
      const userId = req.admin.id;
      const user = await Admin.findById(userId).select("-password");
      success=true;
      res.json({user,success});
  
    } catch (error) {
      console.error(error.message);
      res.status(500).send("interval Server error")
    }
  
  })

module.exports=router;