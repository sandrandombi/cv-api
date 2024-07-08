const mongoose = require ("mongoose");
const loisirShema = mongoose.Schema({
    skill: String,
});

const loisir = mongoose.model("loisir",loisirShema);
module.exports = loisirs;