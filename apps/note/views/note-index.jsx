import { noteService } from "../services/note.service.js"
import { NoteList } from "../cmps/note-list.jsx"
import { NoteFilter } from "../cmps/notes-filter.jsx"
const  { Link } = ReactRouterDOM

export class NoteIndex extends React.Component {

    state = {
        notes:[],
        filterBy:null,
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        noteService.query(this.state.filterBy)
            .then((notes) => this.setState({ notes }))
    }

    onChangeBackgroundColor = (noteId,color) => {
        noteService.changeNoteColor(noteId,color)
        .then((notes)=> this.setState({notes}))
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => {
            this.loadNotes()
        })
    }

    onchangeTxt = (noteId,txt,property)=>{
        noteService.onchangeTxt(noteId,txt,property)
        .then((notes)=> this.setState({notes}))
    }

    onchangeTodoTxt = (noteId,txt,todoId) => {
        noteService.onchangeTodoTxt(noteId,txt,todoId)
        .then((notes)=> this.setState({notes}))
    }

    render() {
        const {notes} = this.state
        const {onChangeBackgroundColor , onSetFilter , onchangeTxt,onchangeTodoTxt} = this

        return <section className="note-index main-layout">
            {/* <AddNote onSetNote={this.onSetAddNote}/> */}
            <NoteFilter onSetFilter={onSetFilter}/>
            <NoteList notes={notes} onChangeBackgroundColor={onChangeBackgroundColor} onchangeTxt={onchangeTxt} onchangeTodoTxt={onchangeTodoTxt}/>
        </section>

        
    }
}

