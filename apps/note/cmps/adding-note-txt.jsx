export function AddingNoteTxt({createNoteTxt,created}) {

    function createNote({target},property) {
        // onchangeTxt(note.id,target.innerText,property)
        createNoteTxt(property,target.innerText)
        created(true,false)
    }

    return <section className="adding-note-txt">
        <h3 onBlur={(ev) => createNote(ev, 'title')} dataText="Title" role='textbox' aria-multiline="true" contentEditable="true" className="note-title"></h3>
        <p  onBlur={(ev) => createNote(ev, 'txt')} dataText="Take a note…" role='textbox' aria-multiline="true" contentEditable="true" className="note-txt"></p>
    </section>
}