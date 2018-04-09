import React, { Component } from 'react'

class AddTodo extends Component {
	constructor(props) {
		super(props)

		this.onSubmit = this.onSubmit.bind(this)

		this.state = {
			isEmpty: false
		}
	}

	componentDidMount() {
		this.todoInput.focus()
	}

	onSubmit(event) {
		event.preventDefault()

		if (this.todoInput.value !== '') {
			this.setState({ isEmpty: false })
			this.props.onAdd(this.todoInput.value)
			console.log(this.state.isEmpty)

		} else {
			this.setState({ isEmpty: true })
			console.log(this.state.isEmpty)
		}


		this.todoInput.value = ''
	}

	render() {
		return (
			<section className="add-todo__wrapper">
				<form onSubmit={this.onSubmit} className="add-todo">
					<h3 className="h3 add-todo__header margin-bottom-small">>Add todo</h3>
					<span className="add-todo__text">todo:</span>
					<input className="add-todo__input" defaultValue="" ref={todoInput => this.todoInput = todoInput}/>
					<button className="add-todo__btn btn">Add</button>
					{
						this.state.isEmpty
							? (
								<div className="add-todo__error">
									A task you shall add
								</div>
							) : (
								<div/>
							)
					}
				</form>
			</section>
		)
	}
}

export default AddTodo
