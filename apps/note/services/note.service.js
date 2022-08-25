import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/storage.service.js"

export const noteService = {
    query,
    getNotes,
    changeNoteColor,
    onchangeTxt,
    onchangeTodoTxt,
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
            url: "assets/img/note-img1.jpg",
            title: "Bobi and Me",
            txt:''
        },
        style: {
            backgroundColor: "#fff"
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
        style: {
            backgroundColor: "#fff"
        },
        label: ["Get my stuff together"],
    },
    {
        id: "n104",
        type: "note-video",
        info: {
            url: "https://www.youtube.com/embed/FWy_LbhHtug",
            title: "coding academy",
            txt:''
        },
        style: {
            backgroundColor: "#fff"
        },
        label: ["yaron is the best"],
    },

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

function query(filterBy) {
    let notes = _loadFromStorage()
    if(!notes) {
        notes = getNotes()
        _saveToStorage(notes)
    }

    if (filterBy) {
        notes = notes.filter(note => (
            note.info.title.toLowerCase().includes(filterBy.toLowerCase()) ||
            note.label.includes(filterBy.toLowerCase())
        ))
    }

    return Promise.resolve(notes)
}

function changeNoteColor(noteId,color) {
    const notes = _loadFromStorage()
    let note = notes.find(note=>note.id === noteId)
    note.style.backgroundColor = `${color}`
    _saveToStorage(notes)
    return Promise.resolve(notes)
}

function onchangeTxt (noteId,txt,property) {
    const notes = _loadFromStorage()
    let note = notes.find(note => note.id === noteId)
    note.info[property] = txt
    _saveToStorage(notes)
    return Promise.resolve(notes)
}

function onchangeTodoTxt (noteId,txt,todoId) {
    const notes = _loadFromStorage()
    let note = notes.find(note => note.id === noteId)
    let todo = note.info.todos.find(todo => todo.id ===todoId)
    todo.txt = txt
    _saveToStorage(notes)
    return Promise.resolve(notes)
}

function createNote() {

}

function addLabel() {

}
