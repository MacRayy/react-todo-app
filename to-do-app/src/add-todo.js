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
			<form onSubmit={this.onSubmit}>
				<h3>Add TODO</h3>
				<input placeholder="I also have to do..." ref={todoInput => this.todoInput = todoInput}/>
				<button>Add</button>
			</form>
		)
	}
}

export default AddTodo
