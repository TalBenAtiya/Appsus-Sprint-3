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
    addLabel,
    onchangeLabelTxt,
    onRemoveLabel,
    pinnedQuery,
    onMakePinned,
}

const KEY = 'notesDB'
const PINNED_KEY = 'notesDBPinned'
const gNotes = [
    {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: {
            title: 'Accounts',
            txt: "avacadoMan@gmail.com \n password:avacadoavacado123"
        },
        style: {
            backgroundColor: '#fff'
        },
        label: ["accounts"],
    },
    {
        id: "n101",
        type: "note-txt",
        isPinned: false,
        info: {
            title: 'Fullstack',
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: '#72A8EE'
        },
        label: ["I Love Coding"],
    },
    {
        id: "n102",
        type: "note-img",
        isPinned: false,
        info: {
            url: "assets/img/note-img1.jpg",
            title: "Bobi and Me",
            txt: ''
        },
        style: {
            backgroundColor: "#fde672"
        },
        label: ["Cooking with my bff"],
    },
    {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: false,
        info: {
            title: 'important things about flex and grid',
            txt: "content: the template inside items: the items inside the template place: controls template and items place - doesnt work in flex fit content: fits according to the content  justify-content — controls alignment of all items on the main axis. align-items — controls alignment of all items on the cross axis. align-self — controls alignment of an individual flex item on the cross axis. align-content — described in the spec as for packing flex lines; controls space between flex lines on the cross axis. gap, column-gap, and row-gap — used to create gaps or gutters between flex items. We will also discover how auto margins can be used for alignment in flexbox. grid: fill makes more grid places unlike fit"
        },
        style: {
            backgroundColor: '#fff'
        },
        label: ["I Love Coding"],
    },
    {
        id: "n103",
        type: "note-todos",
        isPinned: false,
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
        isPinned: false,
        info: {
            url: "https://www.youtube.com/embed/FWy_LbhHtug",
            title: "coding academy",
            txt: ''
        },
        style: {
            backgroundColor: "#e26a6a"
        },
        label: ["yaron is the best"],
    },
    {
        id: utilService.makeId(),
        type: "note-video",
        isPinned: false,
        info: {
            url: "https://www.youtube.com/embed/ztVuPGRp5zM",
            title: "Relaxing Music",
            txt: 'chill with me!'
        },
        style: {
            backgroundColor: "#c29dc3"
        },
        label: ["music", "lofi", "chill"],
    },
    {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: false,
        isPinned: true,
        info: {
            title: 'animation websites',
            txt: "https://undraw.co/illustrations \n https://fontawesome.com/ \n https://www.figma.com/files/recent?fuid=1136569554370270706 \n https://animista.net/"
        },
        style: {
            backgroundColor: '#fff'
        },
        label: ["Animation", "Effects", "Useful"],
    },
    {
        id: utilService.makeId(),
        type: "note-todos",
        isPinned: false,
        info: {
            title: 'Shopping List',
            todos: [
                { txt: "Chicken", isDone: false, id: utilService.makeId() },
                { txt: "Eggs", isDone: true, id: utilService.makeId() },
                { txt: "Bread", isDone: false, id: utilService.makeId() },
                { txt: "Vanilla essence", isDone: false, id: utilService.makeId() },
                { txt: "Pasta", isDone: false, id: utilService.makeId() },
                { txt: "Ice cream!", isDone: false, id: utilService.makeId() },
            ]
        },
        style: {
            backgroundColor: "#fb9d74"
        },
        label: ["Food", "Groceries"],
    },
    {
        id: utilService.makeId(),
        type: "note-img",
        isPinned: false,
        info: {
            url: "assets/img/diving.jpg",
            title: "Sinai",
            txt: 'Great Times, when things were simple'
        },
        style: {
            backgroundColor: "#47d7e1"
        },
        label: ["Sinai", "fun", "diving"],
    },
    {
        id: utilService.makeId(),
        type: "note-img",
        isPinned: false,
        info: {
            url: "assets/img/forest.jpg",
            title: "",
            txt: ''
        },
        style: {
            backgroundColor: "#378136"
        },
        label: [],
    },

]

function getNotes() {
    return gNotes
}

function _saveToStorage(notes,isPinned) {
    if(isPinned)storageService.saveToStorage(PINNED_KEY,notes)
    else {storageService.saveToStorage(KEY,notes)}
}

function _loadFromStorage(isPinned) {
    if(isPinned)return storageService.loadFromStorage(PINNED_KEY)
    else{return storageService.loadFromStorage(KEY)}
}

function query(filterBy) {
    let notes = _loadFromStorage(false)
    if (!notes) {
        notes = getNotes().filter(note=>!note.isPinned)
        _saveToStorage(notes,false)
    }

    if (filterBy) {
        notes = notes.filter((note) => (
            (note.info.title.toLowerCase().includes(filterBy.toLowerCase()) && !note.isPinned) ||
        (note.label.some(labelContent => labelContent.includes(filterBy.toLowerCase())) && !note.isPinned)
        ))
    }

    return Promise.resolve(notes)
}

function pinnedQuery(filterBy) {
    let notes = _loadFromStorage(true)
    if (!notes) {
        notes = getNotes().filter(note => note.isPinned)
        _saveToStorage(notes,true)
    }

    if (filterBy) {
        notes = notes.filter((note) => (
            (note.info.title.toLowerCase().includes(filterBy.toLowerCase()) && note.isPinned) ||
        (note.label.some(labelContent => labelContent.includes(filterBy.toLowerCase())) && note.isPinned)
        ))
    }

    return Promise.resolve(notes)
}

function changeNoteColor(noteId, color,isPinned) {
    const notes = _loadFromStorage(isPinned)
    let note = notes.find(note => note.id === noteId)
    note.style.backgroundColor = `${color}`
    _saveToStorage(notes,isPinned)
    return Promise.resolve(notes)
}

function onchangeTxt(noteId, txt, property,isPinned) {
    const notes = _loadFromStorage(isPinned)
    let note = notes.find(note => note.id === noteId)
    note.info[property] = txt
    _saveToStorage(notes,isPinned)
    return Promise.resolve(notes)
}

function onchangeTodoTxt(noteId, txt, todoId,isPinned) {
    const notes = _loadFromStorage(isPinned)
    let note = notes.find(note => note.id === noteId)
    let todo = note.info.todos.find(todo => todo.id === todoId)
    todo.txt = txt
    _saveToStorage(notes,isPinned)
    return Promise.resolve(notes)
}

function todoIsDone(noteId, todoId,isPinned) {
    const notes = _loadFromStorage(isPinned)
    let note = notes.find(note => note.id === noteId)
    let todo = note.info.todos.find(todo => todo.id === todoId)
    todo.isDone = !todo.isDone
    _saveToStorage(notes,isPinned)
    return Promise.resolve(notes)
}

function createNoteTxt(title, txt) {
    const notes = _loadFromStorage(false)
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
    _saveToStorage(notes,false)
    return Promise.resolve(notes)
}

function onRemoveNote(noteId,isPinned) {
    const notes = _loadFromStorage(isPinned)
    let idx = notes.findIndex(note => note.id === noteId)
    console.log('idx', idx)
    notes.splice(idx, 1)
    _saveToStorage(notes,isPinned)
    return Promise.resolve(notes)
}


function createNoteImg(title, txt, url) {
    const notes = _loadFromStorage(false)
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
    _saveToStorage(notes,false)
    return Promise.resolve(notes)
}

function createNoteTodos(title, todos) {
    const notes = _loadFromStorage(false)
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
    _saveToStorage(notes,false)
    return Promise.resolve(notes)
}

function createNoteVideo(title, txt, url) {
    const notes = _loadFromStorage(false)
    let note = {
        id: utilService.makeId(),
        type: "note-video",
        info: {
            url: `https://www.youtube.com/embed/${addEmbed(url)}`,
            title: title ? title : '',
            txt: txt ? txt : ''
        },
        style: {
            backgroundColor: "#fff"
        },
        label: [],
    }
    notes.push(note)
    _saveToStorage(notes,false)
    return Promise.resolve(notes)
}

function addEmbed(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp)
    if (match && match[7].length == 11) {
        console.log(match[7])
        return match[7]
    } else {
        alert("Could not extract video ID.");
    }
}

function addLabel(noteId, label,isPinned) {
    const notes = _loadFromStorage(isPinned)
    let note = notes.find(note => note.id === noteId)
    note.label.push(label)
    _saveToStorage(notes,isPinned)
    return Promise.resolve(notes)
}

function onchangeLabelTxt(noteId, labelIdx, labelTxt,isPinned) {
    const notes = _loadFromStorage(isPinned)
    let note = notes.find(note => note.id === noteId)
    note.label[labelIdx] = labelTxt
    _saveToStorage(notes,isPinned)
    return Promise.resolve(notes)
}

function onRemoveLabel(noteId, labelIdx,isPinned) {
    const notes = _loadFromStorage(isPinned)
    let note = notes.find(note => note.id === noteId)
    note.label.splice(labelIdx, 1)
    _saveToStorage(notes,isPinned)
    return Promise.resolve(notes)
}

function onMakePinned(noteId,isPinned) {
    const notesFrom = _loadFromStorage(isPinned)
    const notesTo = _loadFromStorage(!isPinned)
    console.log('notes to',notesTo,'notes from',notesFrom)
    notesTo.push(notesFrom.splice(notesFrom.findIndex(note=>note.id===noteId),1)[0])
    console.log('notes to',notesTo,'notes from',notesFrom)
    _saveToStorage(notesFrom,isPinned)
    _saveToStorage(notesTo,!isPinned)
    return Promise.resolve()
}


