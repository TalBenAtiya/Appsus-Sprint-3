import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/storage.service.js"

export const mailService = {
    query,
    getById,
}

const KEY = 'emailsDB'

const gMails = [{
    sentFrom: 'Tal Ben Atiya',
    id: utilService.makeId(),
    subject: 'Wating!',
    body:  'Cant wait to see you!',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com'
},
{
    sentFrom: 'Tal Ben Atiya',
    id: utilService.makeId(),
    subject: 'Work Related',
    body: 'Finish that project',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com'
},
{
    sentFrom: 'Tal Ben Atiya',
    id: utilService.makeId(),
    subject: 'Family',
    body: 'Dinner at...',
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
    let mails = _loadFromStorage()
    if (!mails) {
        mails = gMails
        _saveToStorage(mails)
    }

    return Promise.resolve(mails)
}


function getById(id) {
    if (!id) return Promise.resolve(null)
    const mails = _loadFromStorage()
    const mail = mails.find(mail => mail.id === id)
    return Promise.resolve(mail)
}

function _saveToStorage(books) {
    storageService.saveToStorage(KEY, books)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}
