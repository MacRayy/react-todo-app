import React, { Component } from 'react'
import './App.css'

import TodoItem from './todo-item'
import AddTodo from './add-todo'

const todos = [
	{
		todo: 'wlak with dog',
		id: 1,
		isDone: true
	},
	{
		todo: 'learn react',
		id: 2,
		isDone: false
	},
	{
		todo: 'watch star wars',
		id: 3,
		isDone: false
	},
	{
		todo: 'find the droids',
		id: 4,
		isDone: false
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
		this.onCheck = this.onCheck.bind(this)
	}

	componentWillMount() {
		this.getTodos()
		this.setState({ todos })
	}

	componentDidMount() {
		this.setState({ lastId: this.getTodos()[0] !== undefined ? this.getTodos()[this.getTodos().length - 1].id : 0 })
	}

	getTodos() {
		return this.state.todos
	}

	getLastId() {
		return this.state.lastId
	}

	setId() {
		let newId = this.getLastId() + 1
		this.setState({ lastId: newId })
		return newId
	}

	onAdd(todo) {
		const todos = this.getTodos()
		let id = this.setId()

		todos.push({
			todo,
			isDone: false,
			id: id
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

	onCheck(id) {
		let todos = this.getTodos()
		todos = todos.map(todoItem => {
			if (todoItem.id === id) {
				todoItem.isDone = !todoItem.isDone
			}
			return todoItem
		})

		this.setState({ todos: todos })
	}

	render() {
		return (
			<div className="App">
				<header className="header">
					<h1 className="h1">Do or do not</h1>
					<h2 className="h2">There is no try</h2>
				</header>

				<AddTodo
					onAdd={this.onAdd}
				/>

				<main className="main-content">
					<div className="todos">
						<h3 className="h3">todos</h3>
						{
							this.state.todos.map(todo => {
								let todoList = []
								if(!todo.isDone) {
									todoList =
										<TodoItem
											key={todo.id}
											{...todo}
											onDelete={this.onDelete}
											onEditSubmit={this.onEditSubmit}
											onCheck={this.onCheck}
										/>
								}
								return todoList
							})
						}
					</div>

					<div className="done-todos">
						<h3 className="h3">done</h3>
						{
							this.state.todos.map(todo => {
								let todoList = []
								if(todo.isDone) {
									todoList =
										<TodoItem
											key={todo.id}
											{...todo}
											onDelete={this.onDelete}
											onEditSubmit={this.onEditSubmit}
											onCheck={this.onCheck}
										/>
								}
								return todoList
							})
						}
					</div>
				</main>
			</div>

		)
	}
}

export default App
