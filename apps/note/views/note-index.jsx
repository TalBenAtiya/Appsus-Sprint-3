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
    }

    loadNotes = () => {
        noteService.query(this.state.filterBy)
            .then((notes) => this.setState({ notes }))
    }

    onChangeBackgroundColor = (noteId, color) => {
        noteService.changeNoteColor(noteId, color)
            .then((notes) => this.setState({ notes }))
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => {
            this.loadNotes()
        })
    }

    onchangeTxt = (noteId, txt, property) => {
        noteService.onchangeTxt(noteId, txt, property)
            .then((notes) => this.setState({ notes }))
    }

    onchangeTodoTxt = (noteId, txt, todoId) => {
        noteService.onchangeTodoTxt(noteId, txt, todoId)
            .then((notes) => this.setState({ notes }))
    }

    onTodoIsDone = (noteId, todoId) => {
        noteService.todoIsDone(noteId, todoId)
            .then((notes) => this.setState({ notes }))
    }

    createNoteTxt = (title, txt) => {
        noteService.createNoteTxt(title, txt)
            .then((notes) => this.setState({ notes }))
    }

    onRemoveNote = (noteId) => {
        noteService.onRemoveNote(noteId)
            .then(notes => this.setState({ notes }))
    }

    createNoteImg = (title, txt, url) => {
        noteService.createNoteImg(title, txt, url)
            .then(notes => this.setState({ notes }))
    }

    createNoteTodos = (title, todos) => {
        noteService.createNoteTodos(title, todos)
            .then(notes => this.setState({ notes }))
    }

    createNoteVideo = (title, txt, url) => {
        noteService.createNoteVideo(title, txt, url)
            .then(notes => this.setState({ notes }))
    }

    onaddLabel = (noteId, label) => {
        noteService.addLabel(noteId, label)
            .then(notes => this.setState({ notes }))
    }

    onchangeLabelTxt = (noteId, labelIdx, labelTxt) => {
        noteService.onchangeLabelTxt(noteId, labelIdx, labelTxt)
            .then(notes => this.setState({ notes }))
    }

    onRemoveLabel = (noteId, labelIdx) => {
        noteService.onRemoveLabel(noteId, labelIdx)
            .then(notes => this.setState({ notes }))
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
            {pinned.length > 0 && <PinnedNotes
                notes={pinned}
                onChangeBackgroundColor={onChangeBackgroundColor}
                onchangeTxt={onchangeTxt}
                onchangeTodoTxt={onchangeTodoTxt}
                onTodoIsDone={onTodoIsDone}
                onRemoveNote={onRemoveNote}
                onaddLabel={onaddLabel}
                onchangeLabelTxt={onchangeLabelTxt}
                onRemoveLabel={onRemoveLabel}
            />}
            <NoteList notes={notes}
                onChangeBackgroundColor={onChangeBackgroundColor}
                onchangeTxt={onchangeTxt}
                onchangeTodoTxt={onchangeTodoTxt}
                onTodoIsDone={onTodoIsDone}
                onRemoveNote={onRemoveNote}
                onaddLabel={onaddLabel}
                onchangeLabelTxt={onchangeLabelTxt}
                onRemoveLabel={onRemoveLabel}
            />
        </section>
    }
}

