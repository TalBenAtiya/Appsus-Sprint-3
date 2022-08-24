import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/storage.service.js"

export const mailService = {
    query,
}

const KEY = 'emailsDB'

const gEmails = [{
    id: utilService.makeId(),
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com'
},
{
    id: utilService.makeId(),
    subject: 'Work Related',
    body: 'Hello there',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com'
},
{
    id: utilService.makeId(),
    subject: 'Family',
    body: 'Lorem ipsum',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com'
},
]

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}


function query() {
    let emails = _loadFromStorage()
    if (!emails) {
        emails = gEmails
        _saveToStorage(emails)
    }

    return Promise.resolve(emails)
}

function _saveToStorage(books) {
    storageService.saveToStorage(KEY, books)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}
