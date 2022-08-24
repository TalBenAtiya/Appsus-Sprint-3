
import { NoteList } from "../cmps/note-list.jsx"
const  { Link } = ReactRouterDOM

export class NoteIndex extends React.Component {

    state = {
        notes:[]
    }
    render() {

        const {notes} = this.state.notes

        return <section className="note-index">
            {/* <AddNote onSetNote={this.onSetAddNote}/> */}
            <NoteList notes={notes}/>
        </section>

        
    }
}
