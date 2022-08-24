export function NoteTxt({ note }) {

    return <section className="note-txt">
        <h3 className="note-title">{note.info.title}</h3>
        <p className="note-txt">{note.info.txt}</p>
    </section>
}