const getAllContacts = require("./listContacts")
const getContactById = require('./getContactById')
const removeContacts = require('./removeContact')
const addContact = require("./addContact")
module.exports = {
    getAllContacts,
    getContactById,
    removeContacts,
    addContact
}