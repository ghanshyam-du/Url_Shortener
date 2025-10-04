import express from "express"


const router = express.Router();

router.get("/signup", (req, res)=>{
    return res.render('signup');
})

router.get("/signin",(req, res)=>{
    return res.render('signin');
   
})

export default router;