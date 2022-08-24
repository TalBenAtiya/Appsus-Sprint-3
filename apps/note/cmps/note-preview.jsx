import {utilService} from "../../../services/util.service.js"

const {Link} = ReactRouterDOM
export function NotePreview({ note }) {

    function noteTemplate() {
        if(note.type==='note-txt'){
            return <div className="note">
            <h3 className="note-title">{note.mainTitle}</h3>
            <p className="note-txt">{note.info.txt}</p>
            </div>
        }

    }

    return <Link to={"/note/"+ note.id}>
    <article className="note-preview, main-layout">
        {/* <h3>{note.mainTitle}</h3>
        <div></div>
        <p></p>
        <div className="img-container">
            <img src={book.thumbnail} alt="" />
        </div> */}
        {noteTemplate()}
    </article>
    </Link>
}