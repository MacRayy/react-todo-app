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
			<main>
				{
					this.state.isEdit
						? (
							<form onSubmit={this.onEditSubmit}>
								<input defaultValue={todo} ref={todoInput => this.todoInput = todoInput}/>
								<button>Save</button>
							</form>
						)
						: (
							<div>
								<span>{todo}</span>
								{` | `}
								<button onClick={this.onEdit}>Edit</button>
								{` | `}
								<button onClick={this.onDelete}>Delete</button>
								{` | `}
								<button onClick={this.onCheck}>Done: {isDone.toString()}</button>
							</div>
						)
				}
			</main>
		)
	}
}

export default TodoItem
