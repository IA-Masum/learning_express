const Contact = require('./Models/Contact');


const getAllContacts = (req, res) => {

    Contact.find()
        .then(contacts => res.json(contacts))
        .catch(e => console.log(e))

}


const getSingleContact = (req, res) => {
    let {id} = req.params

    Contact.findById(id)
        .then(contact => res.json(contact))
        .catch(e => console.log(e))

}


const addContact = (req, res) => {


    let {name, email, phone} = req.body

    let contact = new Contact({
        name,
        email,
        phone
    })

    contact.save()
        .then(c => res.json(c))
        .catch(e => console.log(e));

}


const updateContact = (req, res) => {
    let {name, email, phone} = req.body;
    let {id} = req.params;

    Contact.findOneAndUpdate({_id: id}, {$set: {name, email, phone}}, {new: true})
        .then(c => res.json(c))
        .catch(e => console.log(e))

}


const deleteContact = (req, res) => {

    let {id} = req.params;
    Contact.findOneAndDelete({_id: id})
        .then(c => res.json(c))
        .catch(e => console.log(e))
}

module.exports = {getAllContacts, getSingleContact, addContact, updateContact, deleteContact}