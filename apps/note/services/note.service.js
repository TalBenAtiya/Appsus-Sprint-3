import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/storage.service.js"

export const noteService = {
    query,
    getNotes,
    changeNoteColor,
    onchangeTxt,
    onchangeTodoTxt,
    todoIsDone,
    createNoteTxt,
    createNoteImg,
    onRemoveNote,
    createNoteTodos,
    createNoteVideo,
}

const KEY = 'notesDB'
const gNotes = [
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
            title: 'Fullstack',
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
            txt: ''
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
            title: 'my todos',
            todos: [
                { txt: "Driving liscence", isDone: true, id: utilService.makeId() },
                { txt: "Coding power", isDone: false, id: utilService.makeId() }
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
            txt: ''
        },
        style: {
            backgroundColor: "#fff"
        },
        label: ["yaron is the best"],
    },

]

function getNotes() {
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
    if (!notes) {
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

function changeNoteColor(noteId, color) {
    const notes = _loadFromStorage()
    let note = notes.find(note => note.id === noteId)
    note.style.backgroundColor = `${color}`
    _saveToStorage(notes)
    return Promise.resolve(notes)
}

function onchangeTxt(noteId, txt, property) {
    const notes = _loadFromStorage()
    let note = notes.find(note => note.id === noteId)
    note.info[property] = txt
    _saveToStorage(notes)
    return Promise.resolve(notes)
}

function onchangeTodoTxt(noteId, txt, todoId) {
    const notes = _loadFromStorage()
    let note = notes.find(note => note.id === noteId)
    let todo = note.info.todos.find(todo => todo.id === todoId)
    todo.txt = txt
    _saveToStorage(notes)
    return Promise.resolve(notes)
}

function todoIsDone(noteId, todoId) {
    const notes = _loadFromStorage()
    let note = notes.find(note => note.id === noteId)
    let todo = note.info.todos.find(todo => todo.id === todoId)
    todo.isDone = !todo.isDone
    _saveToStorage(notes)
    return Promise.resolve(notes)
}

function createNoteTxt(title, txt) {
    const notes = _loadFromStorage()
    let note = {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: {
            title: title ? title : '',
            txt: txt ? txt : ''
        },
        style: {
            backgroundColor: '#fff'
        },
        label: [],
    }
    notes.push(note)
    _saveToStorage(notes)
    return Promise.resolve(notes)
}

function onRemoveNote(noteId) {
    const notes = _loadFromStorage()
    let idx = notes.findIndex(note => note.id === noteId)
    console.log('idx', idx)
    notes.splice(idx, 1)
    _saveToStorage(notes)
    return Promise.resolve(notes)
}


function createNoteImg(title, txt, url) {
    const notes = _loadFromStorage()
    let note = {
        id: utilService.makeId(),
        type: "note-img",
        info: {
            url: url,
            title: title ? title : '',
            txt: txt ? txt : ''
        },
        style: {
            backgroundColor: "#fff"
        },
        label: [],
    }
    notes.push(note)
    _saveToStorage(notes)
    return Promise.resolve(notes)
}

function createNoteTodos(title, todos) {
    const notes = _loadFromStorage()
    let note = {
        id: utilService.makeId(),
        type: "note-todos",
        info: {
            title: title,
            todos: todos
        },
        style: {
            backgroundColor: "#fff"
        },
        label: [],
    }
    notes.push(note)
    _saveToStorage(notes)
    return Promise.resolve(notes)
}

function createNoteVideo(title,txt,url) {
    const notes = _loadFromStorage()
    let note = {
        id: utilService.makeId(),
        type: "note-video",
        info: {
            url: addEmbed(url)+'',
            title: title ? title : '',
            txt: txt ? txt : ''
        },
        style: {
            backgroundColor: "#fff"
        },
        label: [],
    }
    notes.push(note)
    _saveToStorage(notes)
    return Promise.resolve(notes)
}

function addEmbed(url) {
    let urlStart = url.substring(0,23)
    let urlAlmostEnd = url.substring(32)
    let endIdx = urlAlmostEnd.split('').findIndex(char => char === '=' )+31
    let urlEnd = url.substring(32,endIdx-1)
    return urlStart+'/embed/'+urlEnd
}

function addLabel() {
    
}


