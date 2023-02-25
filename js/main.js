import { getContacts } from "./utils/api.js";
import { renderContact } from "./utils/creators.js";

const listElement = document.querySelector('ul.contacts')


getContacts()
  .then((contacts) => {
    contacts.forEach((contact) => {
      renderContact(contact, listElement)
    })
    // renderLoading()
    // renderContacts(contacts)
  })
  .catch(() => {
    // обрботка ошибки
  })
  .finally(() => {
    // убирать Loader
  })