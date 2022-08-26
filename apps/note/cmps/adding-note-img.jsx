export class AddingNoteImg extends React.Component {

    state = {
        title: null,
        txt: null,
    }


    onTxtChange = ({ target }, property) => {
        this.setState({ [property]: target.innerText })
    }

    sumitNote = () => {
        const { title, txt } = this.state
        this.props.createNoteTxt(title, txt)
        this.props.created(true, false)
    }

    render() {
        const { onTxtChange, sumitNote } = this
        return <section className="adding-note-txt">
            <div><img src={note.info.url} alt="" /></div>
            <h3 onBlur={(ev) => onTxtChange(ev, 'title')} datatext="Title" role='textbox' contentEditable="true" suppressContentEditableWarning="true" className="note-title"></h3>
            <p onBlur={(ev) => onTxtChange(ev, 'txt')} datatext="Take a note…" contentEditable="true" suppressContentEditableWarning='true' className="note-txt"></p>
            <div className="add-note-btn" onClick={() => sumitNote()}><img src="assets/img/add-note-icon.png" alt="" /></div>
        </section>
    }
}