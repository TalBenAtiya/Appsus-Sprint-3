// import { utilService } from "../../../services/util.service"
import { noteService } from "../services/note.service.js"
export function NoteEdit({ note,noteId, onChangeBackgroundColor, onRemoveNote,onaddLabel,onMakePinned }) {

    function changeColor({ target }) {
        onChangeBackgroundColor(noteId, target.value,note.isPinned)
    }

    function removeNote(noteId) {
        console.log(noteId, 'id')
        onRemoveNote(noteId,note.isPinned)
    }

    return <section className="note-edit">
        <div className="input-color-container">
            <img src='assets/svg/background-color-icon.svg' alt="" />
            <input onChange={(ev) => changeColor(ev)} className="input-background-color" type="color" />
        </div>
        <div onClick={() => removeNote(noteId)} className="remove-note">
            <img src="assets/svg/trash-icon.svg" alt="" />
        </div>
        <div className="add-label">
            <img onClick={()=> onaddLabel(noteId,'',note.isPinned)} src="assets/img/add-tag-icon.png" alt="" />
        </div>
        <div className="make-pinned">
            <img onClick={()=> onMakePinned(noteId,note.isPinned)} src="assets/svg/pin-note-icon.svg" alt="" />
        </div>
    </section>

}