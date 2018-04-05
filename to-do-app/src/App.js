import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const todos = [
	{
		name: 'wlak with dog',
		id: 1,
		done: true
	},
	{
		name: 'learn react',
		id: 2,
		done: false
	},
	{
		name: 'drink water',
		id: 3,
		done: false
	}
]

localStorage.setItem('todos', JSON.stringify(todos))

class App extends Component {
	componentWillMount() {
		const todos = JSON.parse(localStorage.getItem('todos'))
		console.log(todos)
	}

	render() {
		return (
			<div className="App">
				<h1>TODO app</h1>
			</div>
		)
	}
}

export default App
