// import { utilService } from "../../../services/util.service.js"
import { NoteTxt } from "./note-txt.jsx"
import { NoteImg } from "./note-img.jsx"
import { NoteTodos } from "./note-todos.jsx"
import {NoteEdit} from "./note-edit.jsx"
// const { Link } = ReactRouterDOM
export function NotePreview({ note , onChangeBackgroundColor}) {

    function noteTemplate() {
        switch (note.type) {
            case 'note-txt':
                return <div style={{backgroundColor:note.style.backgroundColor}} className="note">
                    <NoteTxt note={note}/>
                    <NoteEdit noteId={note.id} onChangeBackgroundColor={onChangeBackgroundColor}/>
                </div>
            case 'note-img':
                return <div style={{backgroundColor:note.style.backgroundColor}} className="note-img">
                <NoteImg note={note}/>
                <NoteEdit noteId={note.id} onChangeBackgroundColor={onChangeBackgroundColor}/>
            </div>
            case 'note-todos':
                return <div style={{backgroundColor:note.style.backgroundColor}} className="note">
                <NoteTodos note={note}/>
                <NoteEdit noteId={note.id} onChangeBackgroundColor={onChangeBackgroundColor}/>
            </div>
        }

    }

    return <article className="note-preview, main-layout">
        {noteTemplate()}
    </article>
}
