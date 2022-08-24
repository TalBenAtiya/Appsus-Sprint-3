import { noteService } from "../services/note.service.js"
import { NoteList } from "../cmps/note-list.jsx"
const  { Link } = ReactRouterDOM

export class NoteIndex extends React.Component {

    state = {
        notes:[]
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        noteService.query()
            .then((notes) => this.setState({ notes }))
    }

    render() {

        const {notes} = this.state
        console.log()

        return <section className="note-index">
            {/* <AddNote onSetNote={this.onSetAddNote}/> */}
            <NoteList notes={notes}/>
        </section>

        
    }
}
