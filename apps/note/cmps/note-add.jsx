import { AddingNoteTxt } from "./adding-note-txt.jsx"
export class NoteAdd extends React.Component {

    state = {
        noteStartOpen: true,
        noteTxtOpen: false,
        noteImgOpen: false,
        noteTodosOpen: false,
        noteVideoOpen: false,
    }

    dropDownAdd = (noteType, { target }) => {
        target.setAttribute('dataText', 'Title')
        switch (noteType) {
            case 'note-txt':
                this.setState({ noteTxtOpen: true })
                break;
            case 'note-img':
                this.setState({ noteImgOpen: true })
                break;
            case 'note-todos':
                this.setState({ noteTodosOpen: true })
                break;
            case 'note-video':
                this.setState({ noteVideoOpen: true })
                break;
        }
        this.setState({ noteStartOpen: false })
    }

    importImg = (ev) => {
        // ev.preventDefault()
        ev.stopPropagation()
        console.log('hello')
    }

    render() {
        const { createNoteTxt } = this.props
        const { noteTxtOpen, noteImgOpen, noteTodosOpen, noteVideoOpen, noteStartOpen } = this.state
        return <section className="note-add">
            {noteStartOpen && <div onClick={(ev) => this.dropDownAdd('note-txt', ev)} dataText="Take a note…" contentEditable='true' className="note-add-box"><div onClick={(ev)=>importImg(ev)}><img src="assets/svg/add-img-icon.svg" alt="" /></div></div>}
            {noteTxtOpen && <AddingNoteTxt createNoteTxt={createNoteTxt} created={(onStart, onTxt) => { this.setState({ noteStartOpen: onStart, noteTxtOpen: onTxt }) }} />}
            {noteImgOpen && <AddingNoteImg createNoteImg={createNoteImg} created={ (onStart, onImg) => {this.setState({noteStartOpen:onStart,noteImgOpen:onImg})}}/>}
        </section>
    }
}
// onBlur={(ev) => createNote(ev, 'txt')}
// dataText="Take a note…"