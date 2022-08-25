import {NotePreview} from './note-preview.jsx'
export function NoteList({ notes , onChangeBackgroundColor, onchangeTxt,onchangeTodoTxt,onTodoIsDone,onRemoveNote}) {
    return <section className="note-list">
        {notes.map(note => <div className='note-preview' key={note.id}><NotePreview
            note={note} 
            onChangeBackgroundColor={onChangeBackgroundColor}
            onchangeTxt={onchangeTxt}
            onchangeTodoTxt={onchangeTodoTxt}
            onTodoIsDone={onTodoIsDone}
            onRemoveNote={onRemoveNote}
        />
        {/* adding here */}
        </div>
        )}
    </section>
}