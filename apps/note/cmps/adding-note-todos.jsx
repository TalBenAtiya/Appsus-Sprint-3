import { utilService } from "../../../services/util.service.js"
export class AddingNoteTodos extends React.Component {

    state = {
        title: null,
        todos: []
    }


    componentDidMount() {
        this.addTodo()
    }

    onTxtChange = ({ target }, property) => {
        this.setState({ [property]: target.innerText })
    }

    changeTodosTxt = ({ target }, todoIdx) => {
        const todos = this.state.todos
        let todo = todos.find((todo,idx)=> idx === todoIdx)
        todo.txt = target.innerText
        this.setState({todos:todos})
    }

    submitNote = () => {
        this.props.createNoteTodos(this.state.title, this.state.todos)
        this.props.created(true, false)
    }

    addTodo = () => {
        const { todos } = this.state
        let todo = { txt: '', isDone: false, id: utilService.makeId() }
        console.log(todo)
        console.log(todos)
        todos.push(todo)
        this.setState({ todos })
    }

    render() {
        const { onTxtChange, submitNote, addTodo,changeTodosTxt } = this
        
        return <section className="adding-note-txt">
            <h3 onBlur={(ev) => onTxtChange(ev, 'title')} datatext="Title" role='textbox' contentEditable="true" suppressContentEditableWarning="true" className="note-title"></h3>
            <ul className="todos-list">
                {this.state.todos.length>0 && this.state.todos.map((todo, idx) =>
                    <div key={todo.id} className="todo-container">‣<li className={todo.isDone ? 'isDone' : ''} onBlur={(ev) => changeTodosTxt(ev, idx)} aria-multiline="true" contentEditable="true" suppressContentEditableWarning='true' >{todo.txt}</li></div>
                )}
            </ul>
            <div className="add-todo-img-container"><img className="add-todo-img" onClick={() => addTodo()} src="assets/img/mini-plus-icon.png" alt="" /></div>
            <div className="add-note-btn" onClick={() => submitNote()}><img src="assets/img/add-note-icon.png" alt="" /></div>
        </section>
    }
}