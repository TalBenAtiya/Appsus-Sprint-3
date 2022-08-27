import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/storage.service.js"
import { showSuccessMsg } from "../../../services/event-bus.service.js"

export const mailService = {
    query,
    getById,
    mailRead,
    setMailStar,
    setImportant,
    sendMail,
    sendToTrash,
    getUnreadMails,
}

const KEY = 'emailsDB'

const gMails = [{
    img: '',
    sentFrom: 'Github',
    id: utilService.makeId(),
    subject: utilService.makeLorem(2),
    body: utilService.makeLorem(),
    isRead: false,
    sentAt: new Date().getTime(),
    to: 'momo@momo.com',
    labels: []
},
{
    img: '',
    sentFrom: 'Facebook',
    id: utilService.makeId(),
    subject: utilService.makeLorem(2),
    body: utilService.makeLorem(),
    isRead: false,
    sentAt: new Date().getTime(),
    to: 'momo@momo.com',
    labels: ['starred',]
},
{
    img: '',
    sentFrom: 'Adobe',
    id: utilService.makeId(),
    subject: utilService.makeLorem(1),
    body: utilService.makeLorem(),
    isRead: false,
    sentAt: new Date().getTime(),
    to: 'momo@momo.com',
    labels: []
},
{
    img: '',
    sentFrom: 'Pinterest',
    id: utilService.makeId(),
    subject: utilService.makeLorem(2),
    body: utilService.makeLorem(),
    isRead: false,
    sentAt: new Date().getTime(),
    to: 'momo@momo.com',
    labels: ['starred',]
},
{
    img: '',
    sentFrom: 'Slack',
    id: utilService.makeId(),
    subject: utilService.makeLorem(2),
    body: utilService.makeLorem(),
    isRead: false,
    sentAt: new Date().getTime(),
    to: 'momo@momo.com',
    labels: ['starred',]
},
{
    img: '',
    sentFrom: 'Epic Games',
    id: utilService.makeId(),
    subject: utilService.makeLorem(1),
    body: utilService.makeLorem(),
    isRead: false,
    sentAt: new Date().getTime(),
    to: 'momo@momo.com',
    labels: []
},
{
    img: '',
    sentFrom: 'Steelseries',
    id: utilService.makeId(),
    subject: utilService.makeLorem(2),
    body: utilService.makeLorem(),
    isRead: false,
    sentAt: new Date().getTime(),
    to: 'momo@momo.com',
    labels: ['important',]
},
{
    img: '',
    sentFrom: 'Nvidia',
    id: utilService.makeId(),
    subject: utilService.makeLorem(2),
    body: utilService.makeLorem(),
    isRead: false,
    sentAt: new Date().getTime(),
    to: 'momo@momo.com',
    labels: []
},
{
    img: '',
    sentFrom: 'Steam',
    id: utilService.makeId(),
    subject: utilService.makeLorem(3),
    body: utilService.makeLorem(),
    isRead: false,
    sentAt: new Date().getTime(),
    to: 'momo@momo.com',
    labels: []
},
{
    img: '',
    sentFrom: 'Tal Ben Atiya',
    id: utilService.makeId(),
    subject: utilService.makeLorem(2),
    body: utilService.makeLorem(),
    isRead: false,
    sentAt: new Date().getTime(),
    to: 'momo@momo.com',
    labels: ['starred',]
},
{
    img: '',
    sentFrom: 'Tal Ben Atiya',
    id: utilService.makeId(),
    subject: utilService.makeLorem(1),
    body: utilService.makeLorem(),
    isRead: false,
    sentAt: new Date().getTime(),
    to: 'momo@momo.com',
    labels: ['important',]
},
{
    img: '',
    sentFrom: 'Tal Ben Atiya',
    id: utilService.makeId(),
    subject: utilService.makeLorem(2),
    body: utilService.makeLorem(),
    isRead: false,
    sentAt: new Date().getTime(),
    to: 'momo@momo.com',
    labels: []
},
{
    img: '',
    sentFrom: 'Tal Ben Atiya',
    id: utilService.makeId(),
    subject: utilService.makeLorem(2),
    body: utilService.makeLorem(),
    isRead: false,
    sentAt: new Date().getTime(),
    to: 'momo@momo.com',
    labels: ['important',]
},
{
    img: '',
    sentFrom: 'Tal Ben Atiya',
    id: utilService.makeId(),
    subject: utilService.makeLorem(3),
    body: utilService.makeLorem(),
    isRead: false,
    sentAt: new Date().getTime(),
    to: 'momo@momo.com',
    labels: ['starred',]
},
{
    img: '',
    sentFrom: 'Tal Ben Atiya',
    id: utilService.makeId(),
    subject: utilService.makeLorem(2),
    body: utilService.makeLorem(),
    isRead: false,
    sentAt: new Date().getTime(),
    to: 'momo@momo.com',
    labels: []
},
{
    img: '',
    sentFrom: 'Tal Ben Atiya',
    id: utilService.makeId(),
    subject: utilService.makeLorem(1),
    body: utilService.makeLorem(),
    isRead: false,
    sentAt: new Date().getTime(),
    to: 'momo@momo.com',
    labels: ['starred',]
},
{
    img: '',
    sentFrom: 'Tal Ben Atiya',
    id: utilService.makeId(),
    subject: utilService.makeLorem(1),
    body: utilService.makeLorem(),
    isRead: false,
    sentAt: 1661510823500,
    to: 'momo@momo.com',
    labels: ['important',]
},
{
    img: '',
    sentFrom: 'Tal Ben Atiya',
    id: utilService.makeId(),
    subject: utilService.makeLorem(2),
    body: utilService.makeLorem(),
    isRead: false,
    sentAt: 166151084,
    to: 'momo@momo.com',
    labels: []
},
]

const loggedinUser = {
    email: 'momo@momo.com',
    fullname: 'Mahatma Appsus'
}


function query(filterBy = 'inbox', searchBy = '') {
    let mails = _loadFromStorage()
    if (!mails) {
        mails = gMails
        _saveToStorage(mails)
    }

    if (filterBy === 'inbox') {
        mails = mails.filter(mail => mail.to === loggedinUser.email && !mail.labels.includes('trash'))
        if (!mails || mails.length === 0) return Promise.resolve(mails)
    }

    else if (filterBy === 'starred') {
        mails = mails.filter(mail => mail.labels.includes('starred'))
        if (!mails || mails.length === 0) return Promise.resolve(mails)
    }

    else if (filterBy === 'important') {
        mails = mails.filter(mail => mail.labels.includes('important'))
        if (!mails || mails.length === 0) return Promise.resolve(mails)
    }

    else if (filterBy === 'sent') {
        mails = mails.filter(mail => mail.to !== "momo@momo.com" && !mail.labels.includes('trash'))
        if (!mails || mails.length === 0) return Promise.resolve(mails)
    }

    else if (filterBy === 'trash') {
        mails = mails.filter(mail => mail.labels.includes('trash'))
        if (!mails || mails.length === 0) return Promise.resolve(mails)
    }

    const filterMails = mails.filter(mail => mail.subject.toLowerCase().includes(searchBy.toLowerCase()) || mail.sentFrom.toLowerCase().includes(searchBy.toLowerCase()))
    return Promise.resolve(filterMails)
}

function mailRead(mailId) {
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

function sendToTrash(mailId) {
    let mails = _loadFromStorage()
    let mail = mails.find(mail => mail.id === mailId)
    if (!mail.labels.includes('trash')) {
        mail.labels = ['trash']
    } else {
        const mailIdx = mails.findIndex(mail => mail.id === mailId) 
        mails.splice(mailIdx, 1)
        showSuccessMsg('Mail Deleted!')
    }
    _saveToStorage(mails)
    return Promise.resolve()
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
    return Promise.resolve()
}

function sendMail(mail) {
    let mails = _loadFromStorage()
    mails.unshift(mail)
    _saveToStorage(mails)
    return Promise.resolve()
}

function getUnreadMails() { 
    let mails = _loadFromStorage()
    if (!mails) return
    const unreadMails = mails.filter(mail => mail.isRead === false)
    if (unreadMails.length > 99) return '99+'
    else return unreadMails.length
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