import {NotePreview} from './note-preview.jsx'
export function NoteList({ notes , onChangeBackgroundColor}) {
    return <section className="note-list">
        {notes.map(note => <div className='note-preview' key={note.id}><NotePreview
            note={note} onChangeBackgroundColor={onChangeBackgroundColor}
        />
        {/* adding here */}
        </div>
        )}
    </section>
}