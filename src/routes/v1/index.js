import express from "express";

const router=express.Router();

router.get('/test-route',(req,res)=> res.json({message:"welcome to air line services"}))

export {router as v1Routes}