import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/storage.service.js"

export const noteService = {
    query,
    getNotes,
}

const KEY = 'notesDB'
const gNotes = [
    {
        mainTitle:"Fullstack",
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        mainTitle:"Friend Bobi",
        id: "n102",
        type: "note-img",
        info: {
            url: "http://some-img/me",
            title: "Bobi and Me"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        mainTitle:"Todos",
        id: "n103",
        type: "note-todos",
        info: {
            label: "Get my stuff together",
            todos: [
                { txt: "Driving liscence", doneAt: null },
                { txt: "Coding power", doneAt: 187111111 }
            ]
        }
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


