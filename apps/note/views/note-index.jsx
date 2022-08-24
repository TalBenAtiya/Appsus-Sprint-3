import { noteService } from "../services/note.service.js"
import { NoteList } from "../cmps/note-list.jsx"
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
        noteService.query()
            .then((notes) => this.setState({ notes }))
    }

    onChangeBackgroundColor = (noteId,color) => {
        console.log('changing')
        noteService.changeNoteColor(noteId,color)
        .then((notes)=> this.setState({notes}))
    }

    // onSetFilter = () => {
    //     this.setState({ filterBy }, () => {
    //         this.loadNotes()
    //     })
    // }

    render() {
        const {notes} = this.state
        const {onChangeBackgroundColor} = this

        return <section className="note-index">
            {/* <AddNote onSetNote={this.onSetAddNote}/> */}
            {/* <NoteFilter onSetFilter={onSetFilter}/> */}
            <NoteList notes={notes} onChangeBackgroundColor={onChangeBackgroundColor}/>
           
        </section>

        
    }
}

