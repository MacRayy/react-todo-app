import React, { Component } from 'react'

class TodoItem extends Component {

	render() {
		const { name, id, done } = this.props

		return (
			<div>
				<span>{name}</span>
				{` | `}
				<button>Delete</button>
			</div>
		)
	}
}

export default TodoItem
