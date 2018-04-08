import React, { Component } from 'react'

class AddTodo extends Component {
	constructor(props) {
		super(props)

		this.onSubmit = this.onSubmit.bind(this)
	}

	componentDidMount() {
		this.todoInput.focus()
	}

	onSubmit(event) {
		event.preventDefault()

		this.props.onAdd(this.todoInput.value)

		this.todoInput.value = ''
	}

	render() {
		return (
			<section className="add-todo__wrapper">
				<form onSubmit={this.onSubmit} className="add-todo">
					<h3 className="h3 add-todo__header margin-bottom-small">>Add todo</h3>
					<span className="add-todo__text">todo:</span>
					<input className="add-todo__input" placeholder="" ref={todoInput => this.todoInput = todoInput}/>
					<button className="add-todo__btn btn">Add</button>
				</form>
			</section>
		)
	}
}

export default AddTodo
