export function NoteImg ({note,onchangeTxt}) {

    function changeTxt({target},property) {
        onchangeTxt(note.id,target.innerText,property,note.isPinned)
    }

    return <section className="note-image">
         <div><img src={note.info.url} alt="" /></div>
                {note.info.title !== '' && <h3 onBlur={(ev) => changeTxt(ev, 'title')} suppressContentEditableWarning='true' contentEditable="true" className="note-title">{note.info.title}</h3>}
                {note.info.txt !== '' && <p onBlur={(ev) => changeTxt(ev, 'txt')} suppressContentEditableWarning='true' contentEditable="true" className="note-txt">{note.info.txt}</p>}
    </section>
}