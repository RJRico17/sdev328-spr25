import { Router } from 'express';

const router = Router();

router.get('/pages/index',(req,res)=>{
    res.render('home',{});
})

export default router;