export function NoteTodos({note}) {
    return <section className="note-todos">
        <h3 className="note-title">{note.info.title}</h3>
                <ul className="todos-list">
                    {note.info.todos.map(todo =>
                        <div key={todo.id} className="todo-container"> <input type="checkbox" onChange={(ev) => isDone(ev)} /><li >{todo.txt}</li></div>
                    )}
                </ul>
    </section>
}