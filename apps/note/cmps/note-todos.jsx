export class NoteTodos extends React.Component {
    state = {
        note:null,
    }

    
    componentDidMount(){
        this.loadNote()
    }

    loadNote = () => {
        this.setState({note:this.props.note})
    }

    changeTxt = ({ target }, property) => {
        this.props.onchangeTxt(this.props.note.id, target.innerText, property,this.props.note.isPinned)
    }

    changeTodosTxt = ({ target }, todoId) => {
        this.props.onchangeTodoTxt(this.props.note.id, target.innerText, todoId,this.props.note.isPinned)
    }

    todoIsDone = (todoId) => {
        this.props.onTodoIsDone(this.props.note.id, todoId,this.props.note.isPinned)
    }

    render() {
        const { note } = this.props
        return <section className="note-todos">
            <h3 onBlur={(ev) => this.changeTxt(ev, 'title')} className="note-title" role='textbox' aria-multiline="true" contentEditable="true" suppressContentEditableWarning='true'>{note.info.title}</h3>
            <ul className="todos-list">
                {note.info.todos.map((todo,idx) =>
                    <div key={todo.id} className="todo-container"> <input type="checkbox" checked={todo.isDone} onChange={() => this.todoIsDone(todo.id)} /><li className={note.info.todos[idx].isDone? 'isDone' : ''} onBlur={(ev) => changeTodosTxt(ev, todo.id)} aria-multiline="true" contentEditable="true" suppressContentEditableWarning='true' >{todo.txt}</li></div>
                )}
            </ul>
        </section>
    }
}

// ({note , onchangeTxt,onchangeTodoTxt,onTodoIsDone})