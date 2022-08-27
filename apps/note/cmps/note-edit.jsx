import { utilService } from "../../../services/util.service.js"
import { mailService } from "../../mail/services/mail.service.js"

const  { withRouter }   = ReactRouterDOM

class _NoteEdit extends React.Component {

    changeColor = ({ target }) => {

        this.props.onChangeBackgroundColor(this.props.noteId, target.value, this.props.note.isPinned)
    }

    removeNote = (noteId) => {
        this.props.onRemoveNote(noteId, this.props.note.isPinned)
    }

    sendNoteAsMail = () => {
        console.log(this.props)
        const email = prompt('Send to? (Email address...)')
        const { note } = this.props
        const mail = {
            id: utilService.makeId(),
            sentAt: new Date().getTime(),
            labels: [],
            isRead: true,
            to: email,
            subject: note.info.title,
            body: note.info.txt,
            img: '',
            sentFrom: email,
        }
        
        if (note.type === 'note-img') {
            mail.img = note.info.url
        }
        mailService.sendMail(mail).then(() => this.props.history.push('/mail'))
    }

    render() {
        const { changeColor,removeNote, sendNoteAsMail } = this
        const { onaddLabel, onMakePinned, note, noteId } = this.props
        return <section className="note-edit">
            <div className="input-color-container">
                <img src='assets/svg/background-color-icon.svg' alt="" />
                <input onChange={(ev) => changeColor(ev)} className="input-background-color" type="color" />
            </div>
            <div onClick={() => removeNote(noteId)} className="remove-note">
                <img src="assets/svg/trash-icon.svg" alt="" />
            </div>
            <div className="add-label">
                <img onClick={() => onaddLabel(noteId, '', note.isPinned)} src="assets/img/add-tag-icon.png" alt="" />
            </div>
            <div className="make-pinned">
                <img onClick={() => onMakePinned(noteId, note.isPinned)} src="assets/svg/pin-note-icon.svg" alt="" />
            </div>
            <div className="send-note-mail">
                <img onClick={() => sendNoteAsMail()} src="assets/img/send-mail-from-note-icon.png" alt="" />
            </div>
        </section >
    }

}

export const NoteEdit = withRouter(_NoteEdit)
