// import { utilService } from "../../../services/util.service"
import { noteService } from "../services/note.service.js"
export function NoteEdit({ noteId, onChangeBackgroundColor }) {

    function changeColor({target}) {
        onChangeBackgroundColor(noteId,target.value)
    }

    return <section className="note-edit">
        <div className="input-color-container">
            <img src='../../../assets/svg/background-color-icon.svg' alt="" />
            <input onChange={(ev) => changeColor(ev)} className="input-background-color" type="color" />
        </div>
    </section>

}