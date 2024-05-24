const express= require('express');
const User =require('../models/User')
const router=express.Router();
const {body, ValidationResult}=require('express-validator');

//Creat a user using : POST "/api/auth/creatUser"No login reauired
router.post('/createuser'[
    body('name','Enter a valid name').isLength({min:}),
    email('name','Enter a valid name').isEmail({min:}),
    body('name','Enter a valid name').isLength({min:}),

], async(req,res)=>{
    //If there's errors return bad requsts and the errors
})
const errors=ValidationResult(req);
if(!errors.isEmpty()){
    
}
router.get('/',(req,res)=>{
   console.log(req.body);
   res.send("hello");
})
module.exports=router