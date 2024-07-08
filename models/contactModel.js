const mongoose = require ("mongoose")
const contactShema =  mongoose.Schema ({
    nom: { type: String },
    prenom: { type: String},
    email: { type: String},
    adresse: { type: String},
});

const Contact = mongoose.model ("contact",contactShema);
module.exports = Contact;