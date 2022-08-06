const fs = require("fs/promises")
const contactsPath = require("./contactsPath")


const getAllContacts = async () => {
    try{
        const data = await fs.readFile(contactsPath, 'utf-8')
        return JSON.parse(data)
    } catch (e){
        console.log("ups something went wrong")
    }

}

module.exports = getAllContacts