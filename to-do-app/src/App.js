import React, { Component } from 'react'
import './App.css'

import TodoItem from './todo-item'
import AddTodo from './add-todo'

const todos = [
	{
		todo: 'wlak with dog',
		id: 1,
		done: true
	},
	{
		todo: 'learn react',
		id: 2,
		done: false
	},
	{
		todo: 'drink water',
		id: 3,
		done: false
	}
]

localStorage.setItem('todos', JSON.stringify(todos))

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			todos: JSON.parse(localStorage.getItem('todos')),
			lastId: 0
		}

		this.onAdd = this.onAdd.bind(this)
		this.onDelete = this.onDelete.bind(this)
	}

	componentWillMount() {
		this.getTodos()
		this.setState({ todos })
	}

	componentDidMount() {
		this.state.lastId = this.state.todos[0] !== undefined ? this.state.todos[this.state.todos.length - 1].id : 0
	}

	getTodos() {
		return this.state.todos

	}

	setId() {
		return this.state.lastId = this.state.lastId + 1
	}

	onAdd(todo) {
		const todos = this.getTodos()
		let id = this.setId()

		todos.push({
			todo,
			done: false,
			id: id
		})

		console.log(todos)
	}

	onDelete(id) {
		const todos = this.getTodos()

		const filteredTodos = todos.filter(todo => {
			return todo.id !== id
		})

		console.log(filteredTodos)

		this.setState({ todos: filteredTodos })
	}


	render() {
		return (
			<div className="App">
				<h1>TODO app</h1>

				<AddTodo
					onAdd={this.onAdd}
				/>

				{
					this.state.todos.map(todo => {
						return (
							<TodoItem
								key={todo.id}
								{...todo}
								onDelete={this.onDelete}
							/>
						)
					})
				}
			</div>
		)
	}
}

export default App
