export function NoteVideo ({note,onchangeTxt}) {

    function changeTxt({target},property) {
        onchangeTxt(note.id,target.innerText,property,note.isPinned)
    }

    return <section className="note-video">
         <iframe src={note.info.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                {note.info.title !== '' && <h3 onBlur={(ev) => changeTxt(ev, 'title')} contentEditable="true" suppressContentEditableWarning='true' className="note-title">{note.info.title}</h3>}
                {note.info.txt !== '' && <p onBlur={(ev) => changeTxt(ev, 'txt')} contentEditable="true" suppressContentEditableWarning='true' className="note-txt">{note.info.txt}</p>}
    </section>
}