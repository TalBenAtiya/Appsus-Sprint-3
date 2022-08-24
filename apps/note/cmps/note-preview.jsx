import { utilService } from "../../../services/util.service.js"


const { Link } = ReactRouterDOM
export function NotePreview({ note }) {

    function noteTemplate() {
        if (note.type === 'note-txt') {
            return <div className="note">
                <h3 className="note-title">{note.info.title}</h3>
                <p className="note-txt">{note.info.txt}</p>
            </div>
        }
        if (note.type === 'note-img') {
            return <div className="note-img">
                <div><img src={note.info.url} alt="" /></div>
                {note.info.title !== '' && <h3 className="note-title">{note.info.title}</h3>}
                {note.info.txt !== '' && <p className="note-txt">{note.info.txt}</p>}
            </div>
        }
        if(note.type === 'note-todos') {
            return <div className="note">
                <h3 className="note-title">{note.info.title}</h3>
                <ul className="todos-list">
                    {note.info.todos.map(todo=>
                    <div key={todo.id} className="todo-container"><input type="checkbox" /><li >{todo.txt}</li></div>
                    )}
                </ul>
            </div>
        }

    }

    return <article className="note-preview, main-layout">
        <Link to={"/note/" + note.id}>
            {noteTemplate()}
        </Link>
    </article>

}
 