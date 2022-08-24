import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/storage.service.js"

export const mailService = {
    query,
    getById,
    mailRead,
    setMailStar,
    setImportant,
}

const KEY = 'emailsDB'

const gMails = [{
    sentFrom: 'Tal Ben Atiya',
    id: utilService.makeId(),
    subject: 'Wating!',
    body:  'Cant wait to see you!',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
    labels: []
},
{
    sentFrom: 'Tal Ben Atiya',
    id: utilService.makeId(),
    subject: 'Work Related',
    body: 'Finish that project',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
    labels: []
},
{
    sentFrom: 'Tal Ben Atiya',
    id: utilService.makeId(),
    subject: 'Family',
    body: 'Dinner at...',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
    labels: []
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

function mailRead(mailId){
    let mails = _loadFromStorage()
    let mail = mails.find(mail => mail.id === mailId)
    mail.isRead = true
    _saveToStorage(mails)
    return Promise.resolve(mails)
}


function getById(id) {
    if (!id) return Promise.resolve(null)
    const mails = _loadFromStorage()
    const mail = mails.find(mail => mail.id === id)
    return Promise.resolve(mail)
}

function setMailStar(mailId) {
    let mails = _loadFromStorage()
    let mail = mails.find(mail => mail.id === mailId)
    if (!mail.labels.includes('starred')) {
        mail.labels.push('starred')
    }
    else {
        const labelIdx = mail.labels.findIndex(label => label === 'starred')
        mail.labels.splice(labelIdx, 1)
    }
    _saveToStorage(mails)
    return Promise.resolve(mails)
}


function setImportant(mailId) {
    let mails = _loadFromStorage()
    let mail = mails.find(mail => mail.id === mailId)
    if (!mail.labels.includes('important')) {
        mail.labels.push('important')
    }
    else {
        const labelIdx = mail.labels.findIndex(label => label === 'important')
        mail.labels.splice(labelIdx, 1)
    }
    _saveToStorage(mails)
    return Promise.resolve(mails)
}

function _saveToStorage(books) {
    storageService.saveToStorage(KEY, books)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}
