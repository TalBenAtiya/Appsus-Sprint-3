// import { utilService } from "../../../services/util.service.js"
import { NoteTxt } from "./note-txt.jsx"
import { NoteImg } from "./note-img.jsx"
import { NoteTodos } from "./note-todos.jsx"
import { NoteEdit } from "./note-edit.jsx"
import { NoteVideo } from "./note-video.jsx"
import { NoteLabels } from "./note-labels.jsx"

export class NotePreview extends React.Component {

    noteTemplate = () => {
        const { note, onChangeBackgroundColor, onchangeTxt, onchangeTodoTxt, onTodoIsDone, onRemoveNote, onaddLabel, onchangeLabelTxt,onRemoveLabel,onMakePinned } = this.props
        switch (note.type) {
            case 'note-txt':
                return <div style={{ backgroundColor: note.style.backgroundColor }} className="note">
                    <NoteTxt note={note} onchangeTxt={onchangeTxt} />
                    {note.label.length>0 &&<NoteLabels note={note} noteId={note.id} labels={note.label} onchangeLabelTxt={onchangeLabelTxt} onRemoveLabel={onRemoveLabel} />}
                    <NoteEdit note={note} noteId={note.id} onChangeBackgroundColor={onChangeBackgroundColor} onRemoveNote={onRemoveNote} onaddLabel={onaddLabel} onMakePinned={onMakePinned}/>
                </div>
            case 'note-img':
                return <div style={{ backgroundColor: note.style.backgroundColor }} className="note-img">
                    <NoteImg note={note} onchangeTxt={onchangeTxt} />
                    {note.label.length>0 &&<NoteLabels note={note} noteId={note.id} labels={note.label} onchangeLabelTxt={onchangeLabelTxt} onRemoveLabel={onRemoveLabel} />}
                    <NoteEdit note={note} noteId={note.id} onChangeBackgroundColor={onChangeBackgroundColor} onRemoveNote={onRemoveNote} onaddLabel={onaddLabel} onMakePinned={onMakePinned} />
                </div>
            case 'note-todos':
                return <div style={{ backgroundColor: note.style.backgroundColor }} className="note">
                    <NoteTodos note={note} onchangeTxt={onchangeTxt} onchangeTodoTxt={onchangeTodoTxt} onTodoIsDone={onTodoIsDone} />
                    {note.label.length>0 &&<NoteLabels note={note} noteId={note.id} labels={note.label} onchangeLabelTxt={onchangeLabelTxt} onRemoveLabel={onRemoveLabel} />}
                    <NoteEdit note={note} noteId={note.id} onChangeBackgroundColor={onChangeBackgroundColor} onRemoveNote={onRemoveNote} onaddLabel={onaddLabel} onMakePinned={onMakePinned}/>
                </div>
            case 'note-video':
                return <div style={{ backgroundColor: note.style.backgroundColor }} className="note-img">
                    <NoteVideo note={note} onchangeTxt={onchangeTxt} />
                    {note.label.length>0 &&<NoteLabels note={note} noteId={note.id} labels={note.label} onchangeLabelTxt={onchangeLabelTxt} onRemoveLabel={onRemoveLabel} />}
                    <NoteEdit note={note} noteId={note.id} onChangeBackgroundColor={onChangeBackgroundColor} onRemoveNote={onRemoveNote} onaddLabel={onaddLabel} onMakePinned={onMakePinned}/>
                </div>
        }
    }

    render() {
        return <article className="note-preview">
            {this.noteTemplate()}
        </article>
    }
}
