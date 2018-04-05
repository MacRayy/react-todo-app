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
	}

	componentWillMount() {
		this.getTodos()
	}

	getTodos() {
		const todos = JSON.parse(localStorage.getItem('todos'))

		this.setState({ todos })
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
							/>
						)
					})
				}
			</div>
		)
	}
}

export default App
