export class AddingNoteVideo extends React.Component {

    state = {
        url: null,
        title: null,
        txt: null,
    }

    onUrlChange = ({ target }) => {
        this.state.url = target.innerText
    }

    onTxtChange = ({ target }, property) => {
        this.setState({ [property]: target.innerText })
    }

    submitNote = () => {
        const { title, txt } = this.state
        this.props.createNoteVideo(title, txt, this.state.url)
        this.props.created(true, false)
    }

    render() {
        const { onTxtChange, submitNote, onUrlChange } = this
        return <section className="adding-note-txt">
            <h3 onBlur={(ev) => onTxtChange(ev, 'title')} datatext="Title" role='textbox' contentEditable="true" suppressContentEditableWarning="true" className="note-title"></h3>
            <p onBlur={(ev) => onTxtChange(ev, 'txt')} datatext="Take a note…" contentEditable="true" suppressContentEditableWarning='true' className="note-txt"></p>
            <div onBlur={(ev) => onUrlChange(ev)} datatext="Enter youtube url..." contentEditable="true" suppressContentEditableWarning='true' className="note-txt"></div>
            <div className="add-note-btn" onClick={() => submitNote()}><img src="assets/img/add-note-icon.png" alt="" /></div>
        </section>
    }
}