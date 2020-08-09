import React, { Component } from 'react';
import CardList from './components/CardList.js';
import './assets/styles/App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			countries: []
		};
	}
	componentDidMount() {
		fetch('https://restcountries.eu/rest/v2/all')
			.then(response => response.json())
			.then(data =>
				this.setState({ countries: data })
			);
	}
	render() {
		return (
			<div className="App">
				<CardList
					countries={this.state.countries}
				/>
			</div>
		);
	}
}

export default App;
