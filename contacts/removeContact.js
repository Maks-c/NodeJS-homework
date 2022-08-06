const getAllContacts = require('./listContacts')

const updateProducts = require("./updateContacts")

const removeContacts = async (id) => {
    try{
        const contacts = await getAllContacts()
        const idx = contacts.findIndex(item => item.id === id);
        if(idx === -1) {
            return null;
        }
        const [result] = contacts.splice(idx, 1)
        await updateProducts(contacts)
        return result

    } catch (error){
        console.log("ups something went wrong")
    }

}

module.exports = removeContacts;