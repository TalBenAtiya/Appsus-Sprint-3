export function NoteTxt({ note, onchangeTxt }) {

    function changeTxt({target},property) {
        onchangeTxt(note.id,target.innerText,property)
    }

    return <section className="note-txt">
        <h3 onBlur={(ev) => changeTxt(ev, 'title')} role='textbox' aria-multiline="true" contentEditable="true" className="note-title">{note.info.title}</h3>
        <p onBlur={(ev) => changeTxt(ev, 'txt')} role='textbox' aria-multiline="true" contentEditable="true" className="note-txt">{note.info.txt}</p>
    </section>
}
