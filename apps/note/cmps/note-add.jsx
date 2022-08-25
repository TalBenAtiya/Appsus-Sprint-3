import { AddingNoteTxt } from "./adding-note-txt.jsx"
export class NoteAdd extends React.Component {

    state = {
        noteStartOpen:true,
        noteTxtOpen: false
    }

    createNote = ({ target }, noteType) => {

    }

    dropDownAdd = (noteType,{target}) => {
        switch (noteType) {
            case 'note-txt':
                target.setAttribute('dataText','Title')
                this.setState({noteTxtOpen:true})
                this.setState({noteStartOpen:false})
                break;
            case 'note-img':

                break;
            case 'note-todos':

                break;
            case 'note-video':

                break;
        }
    }

    render() {
        const {noteTxtOpen,noteStartOpen} = this.state
        return <section className="note-add">
            {noteStartOpen&&<div onClick={(ev) => this.dropDownAdd('note-txt',ev)} dataText="Take a note…" onBlur={(ev) => createNote(ev, 'txt')} contentEditable='true' className="note-add-box"></div>}
            {noteTxtOpen && <AddingNoteTxt/> }
        </section>
    }
}
// onBlur={(ev) => createNote(ev, 'txt')}
// data-text="Take a note…"