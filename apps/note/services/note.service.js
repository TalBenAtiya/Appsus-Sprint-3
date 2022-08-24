import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/storage.service.js"

export const noteService = {
    query,
    getNotes,
}

const KEY = 'notesDB'
const gNotes = [
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
            title:'Fullstack',
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: '#fff'
        },
        label: ["Get my stuff together"],
    },
    {
        id: "n102",
        type: "note-img",
        info: {
            url: "../../../assets/img/note-img1.jpg",
            title: "Bobi and Me",
            txt:''
        },
        style: {
            backgroundColor: "#00d"
        },
        label: ["Get my stuff together"],
    },
    {
        id: "n103",
        type: "note-todos",
        info: {
            title:'my todos',
            todos: [
                { txt: "Driving liscence", doneAt: null ,id:utilService.makeId()},
                { txt: "Coding power", doneAt: 187111111,id:utilService.makeId() }
            ]
        },
        label: ["Get my stuff together"],
    }
]

function getNotes () {
    return gNotes
}

function _saveToStorage(notes) {
    storageService.saveToStorage(KEY, notes)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}

function query() {
    let notes = _loadFromStorage()
    if(!notes) {
        notes = getNotes()
        _saveToStorage(notes)
    }

    return Promise.resolve(notes)
}


