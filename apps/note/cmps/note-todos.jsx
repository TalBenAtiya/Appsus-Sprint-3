export function NoteTodos({note , onchangeTxt,onchangeTodoTxt}) {

    function changeTxt({target},property) {
        onchangeTxt(note.id,target.innerText,property)
    }

    function changeTodosTxt({target},todoId) {
        onchangeTodoTxt(note.id,target.innerText,todoId)
    }

    return <section className="note-todos">
        <h3 onBlur={(ev) => changeTxt(ev, 'title')} className="note-title" role='textbox' aria-multiline="true" contentEditable="true">{note.info.title}</h3>
                <ul className="todos-list">
                    {note.info.todos.map(todo =>
                        <div key={todo.id} className="todo-container"> <input type="checkbox"  /><li onBlur={(ev) => changeTodosTxt(ev,todo.id)} role='textbox' aria-multiline="true" contentEditable="true" >{todo.txt}</li></div>
                    )}
                </ul>
    </section>
}