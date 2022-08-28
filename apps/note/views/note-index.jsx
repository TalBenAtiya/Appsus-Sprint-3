import { noteService } from "../services/note.service.js"
import { NoteList } from "../cmps/note-list.jsx"
import { NoteFilter } from "../cmps/notes-filter.jsx"
import { NoteAdd } from "../cmps/note-add.jsx"
import { PinnedNotes } from "../cmps/pinned-notes.jsx"


export class NoteIndex extends React.Component {

    state = {
        notes: [],
        filterBy: null,
        pinned: []
    }

    componentDidMount() {
        this.loadNotes()
        this.loadPinned()
    }

    loadPinned = () => {
        noteService.pinnedQuery(this.state.filterBy)
            .then((notes) => this.setState({ pinned: notes }))
    }

    loadNotes = () => {
        noteService.query(this.state.filterBy)
            .then((notes) => this.setState({ notes }))
    }

    onChangeBackgroundColor = (noteId, color, isPinned) => {
        noteService.changeNoteColor(noteId, color, isPinned)
            .then(() => {
                this.loadNotes()
                this.loadPinned()
            })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => {
            this.loadNotes()
            this.loadPinned()
        })
    }

    onchangeTxt = (noteId, txt, property, isPinned) => {
        noteService.onchangeTxt(noteId, txt, property, isPinned)
            .then(() => {
                this.loadNotes()
                this.loadPinned()
            })
    }

    onchangeTodoTxt = (noteId, txt, todoId, isPinned) => {
        noteService.onchangeTodoTxt(noteId, txt, todoId, isPinned)
            .then(() => {
                this.loadNotes()
                this.loadPinned()
            })
    }

    onTodoIsDone = (noteId, todoId, isPinned) => {
        noteService.todoIsDone(noteId, todoId, isPinned)
            .then(() => {
                this.loadNotes()
                this.loadPinned()
            })
    }

    createNoteTxt = (title, txt) => {
        noteService.createNoteTxt(title, txt)
            .then(() => {
                this.loadNotes()
            })
    }

    onRemoveNote = (noteId, isPinned) => {
        noteService.onRemoveNote(noteId, isPinned)
            .then(() => {
                this.loadNotes()
                this.loadPinned()
            })
    }

    createNoteImg = (title, txt, url) => {
        noteService.createNoteImg(title, txt, url)
            .then(() => {
                this.loadNotes()
            })
    }

    createNoteTodos = (title, todos) => {
        noteService.createNoteTodos(title, todos)
            .then(() => {
                this.loadNotes()
            })
    }

    createNoteVideo = (title, txt, url) => {
        noteService.createNoteVideo(title, txt, url)
            .then(() => {
                this.loadNotes()
            })
    }

    onaddLabel = (noteId, label, isPinned) => {
        noteService.addLabel(noteId, label, isPinned)
            .then(() => {
                this.loadNotes()
                this.loadPinned()
            })
    }

    onchangeLabelTxt = (noteId, labelIdx, labelTxt, isPinned) => {
        noteService.onchangeLabelTxt(noteId, labelIdx, labelTxt, isPinned)
            .then(() => {
                this.loadNotes()
                this.loadPinned()
            })
    }

    onRemoveLabel = (noteId, labelIdx, isPinned) => {
        noteService.onRemoveLabel(noteId, labelIdx, isPinned)
            .then(() => {
                this.loadNotes()
                this.loadPinned()
            })
    }

    onMakePinned = (noteId, isPinned) => {
        console.log()
        noteService.onMakePinned(noteId, isPinned)
            .then(() => {
                this.loadNotes()
                this.loadPinned()
            })
    }


    render() {
        const { notes, pinned } = this.state
        const {
            onChangeBackgroundColor,
            onSetFilter,
            onchangeTxt,
            onchangeTodoTxt,
            onTodoIsDone,
            createNoteTxt,
            onRemoveNote,
            createNoteImg,
            createNoteTodos,
            createNoteVideo,
            onaddLabel,
            onchangeLabelTxt,
            onRemoveLabel,
            onMakePinned,

        } = this

        return <section className="note-index main-layout">
            <div className="filter-and-add-container">
                <NoteFilter onSetFilter={onSetFilter} />
                <NoteAdd
                    createNoteTxt={createNoteTxt}
                    createNoteImg={createNoteImg}
                    createNoteTodos={createNoteTodos}
                    createNoteVideo={createNoteVideo}
                />
            </div>
            {pinned.length > 0 && <div>
                <h4>Pinned</h4>
                <PinnedNotes
                    notes={pinned}
                    onChangeBackgroundColor={onChangeBackgroundColor}
                    onchangeTxt={onchangeTxt}
                    onchangeTodoTxt={onchangeTodoTxt}
                    onTodoIsDone={onTodoIsDone}
                    onRemoveNote={onRemoveNote}
                    onaddLabel={onaddLabel}
                    onchangeLabelTxt={onchangeLabelTxt}
                    onRemoveLabel={onRemoveLabel}
                    onMakePinned={onMakePinned}
                />
            </div>}
            <h4 className="">Unpinned</h4>
            <NoteList notes={notes}
                onChangeBackgroundColor={onChangeBackgroundColor}
                onchangeTxt={onchangeTxt}
                onchangeTodoTxt={onchangeTodoTxt}
                onTodoIsDone={onTodoIsDone}
                onRemoveNote={onRemoveNote}
                onaddLabel={onaddLabel}
                onchangeLabelTxt={onchangeLabelTxt}
                onRemoveLabel={onRemoveLabel}
                onMakePinned={onMakePinned}
            />
        </section>
    }
}

