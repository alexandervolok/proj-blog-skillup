import React, {Component} from 'react'

import './../common/style/reset.css'
import './../common/style/base.css'


import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'


class App extends Component {

	state = {
		AddedToFavourites: {
			// 1:true,
			// 2:false,
		}
	}


	addToFavourites = (postId) => {
		this.setState((prevState)=>({
			AddedToFavourites:{
				...prevState.AddedToFavourites,
				[postId]:true,
			}
		}))
	}

	removeFromFavourites = postId => {
		const AddedToFavourites = Object.assign({}, this.state.AddedToFavourites);
		delete AddedToFavourites[postId];
		this.setState({ AddedToFavourites: AddedToFavourites });
	};


	render () {
	return (
		<div>
			<Header
			AddedToFavourites={this.state.AddedToFavourites}
			/>
			<Main
			AddedToFavourites={this.state.AddedToFavourites}
			addToFavourites={this.addToFavourites}
			removeFromFavourites={this.removeFromFavourites}
			/>
			<Footer/>
		</div>
	)
}
}


export default App
