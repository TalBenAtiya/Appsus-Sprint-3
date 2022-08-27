// import { utilService } from "../../../services/util.service"
import { noteService } from "../services/note.service.js"
export function NoteEdit({ noteId, onChangeBackgroundColor, onRemoveNote,onaddLabel }) {

    function changeColor({ target }) {
        onChangeBackgroundColor(noteId, target.value)
    }

    function removeNote(noteId) {
        console.log(noteId, 'id')
        onRemoveNote(noteId)
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
            <img onClick={()=> onaddLabel(noteId,'')} src="assets/img/add-tag-icon.png" alt="" />
        </div>
    </section>

}