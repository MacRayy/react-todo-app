import React, { Component } from 'react'

class AddTodo extends Component {
	constructor(props) {
		super(props)

		this.onSubmit = this.onSubmit.bind(this)
	}

	onSubmit(event) {
		event.preventDefault()

		this.props.onAdd(this.todoInput.value)

		this.todoInput.value = ''
	}

	render() {
		return (
			<form onSubmit={this.onSubmit} className="add-todo">
				<h3 className="h3">Add todo</h3>
				<input className="add-todo__input" placeholder="I also have to do..." ref={todoInput => this.todoInput = todoInput}/>
				<button className="btn">Add</button>
			</form>
		)
	}
}

export default AddTodo
