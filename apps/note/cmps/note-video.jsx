export function NoteVideo ({note,onchangeTxt}) {

    function changeTxt({target},property) {
        onchangeTxt(note.id,target.innerText,property)
    }

    return <section className="note-video">
         <iframe src={note.info.url} ></iframe>
                {note.info.title !== '' && <h3 onBlur={(ev) => changeTxt(ev, 'title')} contentEditable="true" suppressContentEditableWarning='true' className="note-title">{note.info.title}</h3>}
                {note.info.txt !== '' && <p onBlur={(ev) => changeTxt(ev, 'txt')} contentEditable="true" suppressContentEditableWarning='true' className="note-txt">{note.info.txt}</p>}
    </section>
}