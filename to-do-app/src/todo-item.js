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
		const { todo, id, isDoneHTML } = this.props

		return (
			<div className="todo-container">
				{
					this.state.isEdit
						? (
							<div className="todo-edit__wrapper">
								<form onSubmit={this.onEditSubmit} className="todo-edit">
									<span className="todo-edit__text">Edit:</span>
									<input className="todo-edit__input" defaultValue={todo} ref={todoInput => this.todoInput = todoInput}/>
									<button className="todo-edit__btn btn">Save</button>
								</form>
							</div>
						)
						: (
							<section className="todo">
								<p className="todo__text">{todo}</p>

								<div>
									<label className="todo__label" htmlFor={id} ref={checkLabel => this.checkLabel = checkLabel}>{isDoneHTML}</label>
									<input id={id} type="checkbox" className="todo__checkbox" onClick={this.onCheck}/>
								</div>

								<div className="todo__btn-container">
									<button className="btn" onClick={this.onEdit}>Edit</button>
									<button className="btn" onClick={this.onDelete}>Delete</button>
								</div>
							</section>
						)
				}
			</div>
		)
	}
}

export default TodoItem
