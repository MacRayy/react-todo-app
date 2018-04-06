import React, { Component } from 'react'
import './App.css'

import TodoItem from './todo-item'

const todos = [
	{
		name: 'wlak with dog',
		id: 1,
		done: true
	},
	{
		name: 'learn react',
		id: 2,
		done: false
	},
	{
		name: 'drink water',
		id: 3,
		done: false
	}
]

localStorage.setItem('todos', JSON.stringify(todos))

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			todos: []
		}

		this.onDelete = this.onDelete.bind(this)
	}

	componentWillMount() {
		this.getTodos()
		this.setState({ todos })
	}

	getTodos() {
		return JSON.parse(localStorage.getItem('todos'))

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
