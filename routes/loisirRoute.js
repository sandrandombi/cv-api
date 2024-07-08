const express = require ("express");
const router = express.Router ();
const loisirModel = require ("../models/loisirModel");

router.get("/loisir", async (req, res)=>{
    const loisir = await loisirModel.find();
    res.json (loisir);
})
router.post("/loisir", async (req, res)=>{
    const loisir = req.body;
    await loisirModel.create(loisir);
    res.json({ message: `un loisir${loisir.skill} a été ajouté `});
});

router.delete ("/loisir/:id",async (req, res)=>{
    const { id } = req.params;
    await loisirModel.findByIdandDelete(id);
    res.json({ message: `un loisir a été supprimé`});
});

module.exports = router;