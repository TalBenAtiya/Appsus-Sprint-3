import {NotePreview} from './note-preview.jsx'
export function NoteList({ notes , onChangeBackgroundColor, onchangeTxt,onchangeTodoTxt}) {
    return <section className="note-list">
        {notes.map(note => <div className='note-preview' key={note.id}><NotePreview
            note={note} 
            onChangeBackgroundColor={onChangeBackgroundColor}
            onchangeTxt={onchangeTxt}
            onchangeTodoTxt={onchangeTodoTxt}
        />
        {/* adding here */}
        </div>
        )}
    </section>
}