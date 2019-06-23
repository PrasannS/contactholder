import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './Searchbox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary'



class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				return response.json();
			})
			.then(users =>{
				this.setState({robots:users})
			});
	}

	onSearchChange = (event) =>{
		this.setState({searchfield:event.target.value})
	}

	render(){
		const filteredBots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
			<div className = 'tc'>
				<h1>Contact Holder</h1>
				<SearchBox searchChange={this.state.searchfield,this.onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots = {filteredBots}/>
					</ErrorBoundary>
				</Scroll>
			</div>
		)
	}
}

export default App;