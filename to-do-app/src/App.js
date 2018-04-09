import React, { Component } from 'react'
import './App.css'
import './App.scss'

import TodoItem from './todo-item'
import AddTodo from './add-todo'

const todos = [
	{
		todo: 'get the x-wing out of the swamp',
		id: 1,
		isDone: false,
		isDoneHTML: 'Done ( )'
	},
	{
		todo: 'learn react',
		id: 2,
		isDone: false,
		isDoneHTML: 'Done ( )'
	},
	{
		todo: 'stole the Death Star plans',
		id: 3,
		isDone: false,
		isDoneHTML: 'Done ( )'
	},
	{
		todo: 'find the droids in the dune see and bring back to uncle Owen',
		id: 4,
		isDone: true,
		isDoneHTML: 'Done (*)'
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
			id: id,
			isDoneHTML: 'Done ( )'
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
				todoItem.isDoneHTML = (todoItem.isDoneHTML === 'Done (*)') ? 'Done ( )' : 'Done (*)'
			}
			return todoItem
		})

		this.setState({ todos: todos })
	}

	render() {
		return (
			<div className="App">
				<header className="header">
					<h1 className="h1 margin-bottom-small">Do or do not</h1>
					<h2 className="h2 margin-bottom-small">There is no try</h2>
				</header>

				<AddTodo
					onAdd={this.onAdd}
				/>

				<main className="main-content">
					<div className="todos">
						<h3 className="h3 margin-bottom-small">>todos</h3>
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
						<h3 className="h3 margin-bottom-small">>done</h3>
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
