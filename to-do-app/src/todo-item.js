import React, { Component } from 'react'

class TodoItem extends Component {
	constructor(props) {
		super(props)

		this.onDelete = this.onDelete.bind(this)
	}

	onDelete() {
		const { onDelete, id } = this.props

		onDelete(this.props.id)
	}

	render() {
		const { name, id, done, onDelete } = this.props

		return (
			<div>
				<span>{name}</span>
				{` | `}
				<button onClick={this.onDelete}>Delete</button>
			</div>
		)
	}
}

export default TodoItem
