const getAllContacts = require("./listContacts")


const getContactById = async (id) => {
    try{
        const contacts = await getAllContacts()
        const result = contacts.find(item => item.id === id)
        return result || null;
    } catch (error){
        console.log("ups something went wrong")
    }

}

module.exports = getContactById