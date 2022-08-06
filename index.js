const contactsOperations = require('./contacts')
const {program} = require('commander')

const invokeAction = async ({action, id, name, email, phone}) => {
    switch (action){
        case "getAll":
            const contacts = await contactsOperations.getAllContacts();
            console.log(contacts)
            break
        case "getById":
            const contact = await contactsOperations.getContactById(id)
            if( !contact) {
                throw new Error(`Contact with id=${id} not found`)
            }
            console.log(contact)
            break
        case "remove":
            const removeContact = await contactsOperations.removeContacts(id)
            console.log(removeContact)
            break
        case "add":
            const newContact = await contactsOperations.addContact(name, email, phone)
            console.log(newContact)
            break

        default :
            console.log("unknown action")
    }
}


program
    .option('-a, --action <type>')
    .option('-i, --id <type>')
    .option('-n, --name <type>')
    .option('-p, --phone <type>')
    .option('-e, --email <type>')

program.parse();

const options = program.opts()
invokeAction(options)


