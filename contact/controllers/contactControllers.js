const asynchandler = require('express-async-handler');
const Contact = require('../modelList/contactListModel')

//To get all contacts
 const getAllContacts = asynchandler(async (req,res) => {
    const contacts = await Contact.find()
        if(!contacts){
            res.status(400)
            throw new Error ('Enter a valid contact')
        }
        res.status(200).json(contacts)
 })

 //To set all contacts
 const setContacts = asynchandler(async(req,res) => {
    if(!req.body.lastname && !req.body.firstname && !req.body.email && !req.body.age) {
        res.status(404)
        throw new Error ('Please add a text field')
    }
    const contact  = await Contact.create({
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        email: req.body.email,
        age: req.body.age
 })
    res.status(200).json(contact)
 })

//To display all the info about only one person using his ID
const getOneContact = asynchandler(async(req,res) => {
   const contact = await Contact.findById(req.params.id)

   if(!contact) {
    res.status(404)
    throw new Error('cannot find contact')
   }
   res.status(200).json(contact)
})

// Display all contacts with an age > 18
const getContactsAbove18 = asynchandler(async(req,res) => {
    const contact = await Contact.find({age: {$gt : 18}})
    if(!contact){
        res.status(400)
        throw new Error( 'Invalid')
    }
    res.status(200).json(contact)
})

// const getContactsAbove18 = asynchandler(async (req, res) => {
//     try {
//         const contacts = await Contact.find({ age: { $gt: 18 } }); 
//         if (!contacts || contacts.length === 0) { 
//             res.status(404).json({ message: 'No contacts found with age greater than 18' });
//         } else {
//             res.status(200).json(contacts); 
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// display contact with age > 18 and name containing 'ah'
// const  getContactsAbove18WithNameAh = asynchandler(async(req,res) => {
//     try{
//     const contact = await Contact.find({age: {$gt : 18}, name:{$regex:/ah/i}})
//     if(!contact){
//         res.status(400).json({ message: 'No contacts found with age greater than 18 and containing "ah" in name' })
//     }
//     res.status(200).json(contact)
// } catch(error){
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
// }
//})

const getContactsAbove18WithNameAh = asynchandler(async (req, res) => {
    try {
        const contacts = await Contact.find({
            age: { $gt: 18 }, // Age greater than 18
            name: { $regex: /ah/i } // Name contains "ah" (case-insensitive)
        });

        if (!contacts || contacts.length === 0) { // Check if no contacts found
            res.status(404).json({ message: 'No contacts found with age greater than 18 and containing "ah" in name' });
        } else {
            res.status(200).json(contacts); // Return the contacts found
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});


//update contact
const updateContact = asynchandler (async (req, res) => {
    const contact = await Contact.findById(req.params.id)

    if(!contact){
        res.status(400)
        throw new Error('Contact not found')
    }

    const updateContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new:true}) //the data can saved as a new resource here.
    res.status(200).json(updateContact)
})

//delete contact lessthan 5
const deleteContactbelow5 = asynchandler(async ( req,res ) => {
    const contact = await Contact.findOneAndDelete({age: {$lt : 5}})

    if(!contact){
        res.status(400)
        throw new Error ('contact not found')
    }

    res.status(200).json(contact)
})
module.exports = {getAllContacts, setContacts, getOneContact, getContactsAbove18, getContactsAbove18WithNameAh, updateContact,deleteContactbelow5 }