const express = require ("express");
const router = express.Router();
const contactShema = require ("../models/contactModel");

router.get ("/contact", async (req, res) => {
    console.log(contact);
    res.json(contact)
})

router.post("/contact", async (req, res) =>{
    const newContact = req.body;
    await contactShema.deleteOne()
    await contactShema.create(newContact);
    res.json(newContact);
});
module.exports = router;