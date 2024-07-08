const express = require ("express");
const router = express.Router ();
const formationModel = require ("../models/formationModel");

router.get("/formation", async (req, res)=>{
    const formation = await formationModel.find();
    res.json (formation);
})
router.post("/formation", async (req, res)=>{
    const formation = req.body;
    await formationModel.create(formation);
    res.json({ message: `le diplome${formation.skill} a été ajouté `});
});

router.delete ("/formation/:id",async (req, res)=>{
    const { id } = req.params;
    await formationModel.findByIdandDelete(id);
    res.json({ message: `le diplome a été supprimé`});
});

module.exports = router;