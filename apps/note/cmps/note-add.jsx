import { AddingNoteTxt } from "./adding-note-txt.jsx"
export class NoteAdd extends React.Component {

    state = {
        noteStartOpen: true,
        noteTxtOpen: false,
        noteImgOpen: false,
        noteTodosOpen: false,
        noteVideoOpen: false,
    }

    dropDownAdd = (noteType, ev) => {
        if(ev.target !== ev.currentTarget) return
        const {target} = ev
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
        console.log(ev)
    }

    render() {
        const { createNoteTxt } = this.props
        const { noteTxtOpen, noteImgOpen, noteTodosOpen, noteVideoOpen, noteStartOpen } = this.state
        return <section className="note-add">
            {noteStartOpen && <div onClick={(ev) => this.dropDownAdd('note-txt', ev)} suppressContentEditableWarning='true' contentEditable='true' className="note-add-box">Take a note...<div className="import-img-container" onClick={(ev)=>this.importImg(ev)}> <img className="import-img-icon" src="assets/svg/add-img-icon.svg" alt="" /> <input className="import-img-input" type='file' /></div></div>}
            {noteTxtOpen && <AddingNoteTxt ref={this.inputRef} createNoteTxt={createNoteTxt} created={(onStart, onTxt) => { this.setState({ noteStartOpen: onStart, noteTxtOpen: onTxt }) }} />}
            {noteImgOpen && <AddingNoteImg createNoteImg={createNoteImg} created={ (onStart, onImg) => {this.setState({noteStartOpen:onStart,noteImgOpen:onImg})}}/>}
        </section>
    }
}
// onBlur={(ev) => createNote(ev, 'txt')}
// dataText="Take a note…"