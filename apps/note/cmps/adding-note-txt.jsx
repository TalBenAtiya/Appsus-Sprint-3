export function AddingNoteTxt() {

    function changeTxt({target},property) {
        // onchangeTxt(note.id,target.innerText,property)
    }

    return <section className="adding-note-txt">
        <h3 onBlur={(ev) => changeTxt(ev, 'title')} role='textbox' aria-multiline="true" contentEditable="true" className="note-title">Title</h3>
        <p onBlur={(ev) => changeTxt(ev, 'txt')} role='textbox' aria-multiline="true" contentEditable="true" className="note-txt">Take a note...</p>
    </section>
}