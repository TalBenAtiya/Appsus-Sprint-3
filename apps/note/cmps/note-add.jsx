import { AddingNoteTxt } from "./adding-note-txt.jsx"
import { AddingNoteImg } from "./adding-note-img.jsx"
import { AddingNoteTodos } from "./adding-note-todos.jsx"
import { AddingNoteVideo } from "./adding-note-video.jsx"
export class NoteAdd extends React.Component {

    state = {
        imgUrl: null,
        noteStartOpen: true,
        noteTxtOpen: false,
        noteImgOpen: false,
        noteTodosOpen: false,
        noteVideoOpen: false,
    }

    inputRef = React.createRef()

    dropDownAdd = (noteType, ev) => {
        // ev.stopPropagation()
        if (ev.target !== ev.currentTarget) return
        console.log(noteType)
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
        const reader = new FileReader()
        reader.readAsDataURL(ev.target.files[0])
        reader.addEventListener("load", () => {
            console.log(reader.result)
            this.setState({ imgUrl: reader.result }, () => { this.dropDownAdd('note-img', this.inputRef.current) })
        })
    }

    render() {
        const { createNoteTxt, createNoteImg, createNoteTodos, createNoteVideo } = this.props
        const { noteTxtOpen, noteImgOpen, noteTodosOpen, noteVideoOpen, noteStartOpen } = this.state
        return <section className="note-add">
            {noteStartOpen && <div ref={this.inputRef}
                onClick={(ev) => this.dropDownAdd('note-txt', ev)}
                suppressContentEditableWarning='true'
                contentEditable='true'
                className="note-add-box">Take a note...
                <div className="adding-notes-tooltip">
                    <div className="note-video-icon-container">
                        <img onClick={(ev) => this.dropDownAdd('note-video', ev)} className="note-video-icon" src="assets/img/video-icon.png" alt="" />
                    </div>
                    <div className="note-todos-icon-container" >
                        <img onClick={(ev) => this.dropDownAdd('note-todos', ev)} src="assets/svg/note-todos-icon.svg" alt="" />
                    </div>
                    <div className="import-img-container" >
                        <img className="import-img-icon" src="assets/svg/add-img-icon.svg" alt="" />
                        <input className="import-img-input" type='file' onChange={(ev) => this.importImg(ev)} accept="image/*" />
                    </div>
                </div>
            </div>}
            {noteTxtOpen && <AddingNoteTxt createNoteTxt={createNoteTxt} created={(onStart, onTxt) => { this.setState({ noteStartOpen: onStart, noteTxtOpen: onTxt }) }} />}
            {noteImgOpen && <AddingNoteImg url={this.state.imgUrl} createNoteImg={createNoteImg} created={(onStart, onImg) => { this.setState({ noteStartOpen: onStart, noteImgOpen: onImg }) }} />}
            {noteTodosOpen && <AddingNoteTodos createNoteTodos={createNoteTodos} created={(onStart, onTodos) => { this.setState({ noteStartOpen: onStart, noteTodosOpen: onTodos }) }} />}
            {noteVideoOpen && <AddingNoteVideo createNoteVideo={createNoteVideo} created={(onStart, onVideo) => { this.setState({ noteStartOpen: onStart, noteVideoOpen: onVideo }) }} />}
        </section>
    }
}
// onBlur={(ev) => createNote(ev, 'txt')}
// dataText="Take a note…"