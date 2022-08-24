import { utilService } from "../../../services/util.service.js"
import { NoteEdit } from "./note-edit.jsx"
import { NoteTxt } from "../../../assets/css/apps/note/cmps/note-txt.jsx"
import { NoteImg } from "../../../assets/css/apps/note/cmps/note-img.jsx"
import { NoteTodos } from "../../../assets/css/apps/note/cmps/note-todos.jsx"
// const { Link } = ReactRouterDOM
export function NotePreview({ note }) {

    function noteTemplate() {
        switch (note.type) {
            case 'note-txt':
                return <div className="note">
                    <NoteTxt note={note}/>
                    <NoteEdit />
                </div>
            case 'note-img':
                return <div className="note-img">
                <NoteImg note={note}/>
                <NoteEdit />
            </div>
            case 'note-todos':
                return <div className="note">
                <NoteTodos/>
                <NoteEdit />
            </div>
        }

    }

    return <article className="note-preview, main-layout">
        {noteTemplate()}
    </article>
}
