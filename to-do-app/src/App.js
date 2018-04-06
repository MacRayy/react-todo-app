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
	},
	{
		todo: 'drink water',
		id: 4,
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
		this.onEditSubmit = this.onEditSubmit.bind(this)
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
			id: id,
			done: false
		})

		this.setState({ todos: todos })
	}

	onEditSubmit(todo, id) {
		let todos = this.getTodos()
		todos = todos.map(todoItem => {
			if (todoItem.id === id) {
				todoItem.todo = todo
			}
			return todoItem
		})


		this.setState({ todos: todos })
	}

	onDelete(id) {
		const todos = this.getTodos()

		const filteredTodos = todos.filter(todo => {
			return todo.id !== id
		})
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
								onEditSubmit={this.onEditSubmit}
							/>
						)
					})
				}
			</div>
		)
	}
}

export default App
