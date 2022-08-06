const contactsPath = require("./contactsPath")
const fs = require("fs/promises")

const updateProducts = async (contacts) => {
    try{
        await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
    } catch (e){
        console.log("ups something went wrong")
    }

}

module.exports = updateProducts;