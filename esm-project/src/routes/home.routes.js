import { Router } from 'express';

const router = Router();

router.get("/name", (req, res) => {
    res.status(200).json({
        fname: "Josh",
        lname: "Archer",
        middle: "B",
        title: "Mr.",
        nickname: "Pounce"
    })
})

export default router;