import express from "express";
import {Router} from 'express'
import model from '../models/UserModel'

const router = Router();


router.get('/User', (req,res)=>{
    res.json('adsasdasdasd')
})

router.post('/User',async (req, res)=>{
    console.log(req.body);
    const newUser = new model({
        UserName: req.body.UserName,
        UserFullName: req.body.UserFullName,
        UserPassword:req.body.UserPassword,
        UserIsAviable: req.body.UserIsAviable
         
    });
    await newUser.save();
    console.log(newUser);
    res.json('ok');

})


export default router