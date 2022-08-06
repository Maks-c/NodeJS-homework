const {v4} = require('uuid')
const getAllContacts = require("./listContacts")
const updateContacts = require("./updateContacts")

const addContact = async (name,email,phone) => {

    try{
        const contacts = await getAllContacts()
        const newContact = {
            id:v4(),
            name:name,
            email:email,
            phone:phone
        }
        contacts.push(newContact)
        await updateContacts(contacts)
        return newContact
    }catch (error){
        console.log("ups something went wrong")
    }

}


module.exports = addContact