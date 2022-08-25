import {NotePreview} from './note-preview.jsx'
export function NoteList({ notes , onChangeBackgroundColor, onchangeTxt,onchangeTodoTxt,onTodoIsDone}) {
    return <section className="note-list">
        {notes.map(note => <div className='note-preview' key={note.id}><NotePreview
            note={note} 
            onChangeBackgroundColor={onChangeBackgroundColor}
            onchangeTxt={onchangeTxt}
            onchangeTodoTxt={onchangeTodoTxt}
            onTodoIsDone={onTodoIsDone}
        />
        {/* adding here */}
        </div>
        )}
    </section>
}