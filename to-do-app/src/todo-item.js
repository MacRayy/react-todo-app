import React, { Component } from 'react'

class TodoItem extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isEdit: false
		}

		this.onDelete = this.onDelete.bind(this)
		this.onEdit = this.onEdit.bind(this)
		this.onEditSubmit = this.onEditSubmit.bind(this)
		this.onCheck = this.onCheck.bind(this)
	}

	onEdit() {
		this.setState({ isEdit: true })
	}

	onEditSubmit(event) {
		event.preventDefault()

		this.props.onEditSubmit(this.todoInput.value, this.props.id)

		this.setState({ isEdit: false })
	}

	onDelete() {
		const { onDelete, id } = this.props

		onDelete(id)
	}

	onCheck() {
		const { onCheck, id } = this.props

		onCheck(id)
	}

	render() {
		const { todo, id, isDone } = this.props

		return (
			<div className="todo-container">
				{
					this.state.isEdit
						? (
							<form onSubmit={this.onEditSubmit} className="todo">
								<input className="todo__input" defaultValue={todo} ref={todoInput => this.todoInput = todoInput}/>
								<button className="btn">Save</button>
							</form>
						)
						: (
							<div className="todo">
								<p className="todo__text">{todo}</p>
								<div>
									<button className="btn" onClick={this.onEdit}>Edit</button>
									<button className="btn" onClick={this.onDelete}>Delete</button>
									<button className="btn" onClick={this.onCheck}>Done: {isDone.toString()}</button>
								</div>
							</div>
						)
				}
			</div>
		)
	}
}

export default TodoItem
