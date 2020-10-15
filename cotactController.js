const Contact = require('./Models/Contact');


const getAllContacts = (req, res) => {

    Contact.find()
        .then(contacts => res.render('pages/index', {contacts, error: {}}))
        .catch(e => {
            console.log(e)
            res.json({message: "Error Occurred!"})
        })

}


const getSingleContact = (req, res) => {
    let {id} = req.params

    Contact.findById(id)
        .then(contact => res.json(contact))
        .catch(e => {
            console.log(e)
            res.json({message: "Error Occurred!"})
        })

}


const addContact = (req, res) => {


    let {name, email, phone, id} = req.body


    let error = {}

    if (!name) {
        error.name = "Enter Your Name"
    }

    if (!phone) {
        error.phone = "Enter Your Phone"
    }

    if (!email) {
        error.email = "Enter Your Email"
    }


    let isError = Object.keys(error).length > 0

    if (isError) {

        Contact.find()
            .then(contacts => res.render('pages/index', {contacts, error}))
            .catch(e => {
                console.log(e)
                res.json({message: "Error Occurred!"})
            })

    } else {

        if (id) {

            Contact.findOneAndUpdate({_id: id}, {$set: {name, email, phone}})
                .then(() => {
                        Contact.find()
                            .then(contacts => res.render('pages/index', {contacts, error}))
                            .catch(e => {
                                console.log(e)
                                res.json({message: "Error Occurred!"})
                            })
                    }
                )
                .catch(e => {
                    console.log(e)
                    res.json({message: "Error Occurred!"})
                })

        } else {
            let contact = new Contact({
                name,
                email,
                phone
            })

            contact.save()
                .then(() => {
                    Contact.find()
                        .then(contacts => res.render('pages/index', {contacts, error}))
                        .catch(e => {
                            console.log(e)
                            res.json({message: "Error Occurred!"})
                        })
                })
                .catch(e => {
                    console.log(e)
                    res.json({message: "Error Occurred!"})
                })

        }

    }

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
        .then(c => {
            Contact.find()
                .then(contacts => res.render('pages/index', {contacts, error: {}}))
                .catch(e => {
                    console.log(e)
                    res.json({message: "Error Occurred!"})
                })
        })
        .catch(e => {
            console.log(e)
            res.json({message: "Error Occurred!"})
        })
}

module.exports = {getAllContacts, getSingleContact, addContact, updateContact, deleteContact}