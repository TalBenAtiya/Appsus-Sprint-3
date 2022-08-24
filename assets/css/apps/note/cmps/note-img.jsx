export function NoteImg ({note}) {

    return <section className="note-img">
         <div><img src={note.info.url} alt="" /></div>
                {note.info.title !== '' && <h3 className="note-title">{note.info.title}</h3>}
                {note.info.txt !== '' && <p className="note-txt">{note.info.txt}</p>}
    </section>
}