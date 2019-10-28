import React from 'react'

import Slider from './Slider/Slider'
import TravelPage from './TravelPage/TravelPage'
import FashionPage from './FashionPage/FashionPage'
import LifestylePage from './LifestylePage/LifestylePage'
import AboutMePage from './AboutMePage/AboutMePage'
import Page404 from './Page404/Page404'

import './main.css'
import Subscribe from './Subscribe/Subscribe'
import MainPage from './MainPage/MainPage'

import {Switch, Route} from 'react-router-dom'
import PostPage from './PostPage/PostPage'
import Favourites from './Favourites/Favourites'


const Main = ({
	AddedToFavourites,
	addToFavourites,
	removeFromFavourites,
}) => {
	return (
		<main className="main">
			<div className="container">
				<Slider />
				<Subscribe />
				<Switch>
					<Route path="/" exact component={MainPage} />
					<Route path="/travel" exact render={()=>(
						<TravelPage 
							AddedToFavourites={AddedToFavourites}
							addToFavourites={addToFavourites}
							removeFromFavourites={removeFromFavourites}
						/>
					)}/>
					<Route path="/fashion" exact render={()=>(
						<FashionPage 
						AddedToFavourites={AddedToFavourites}
						addToFavourites={addToFavourites}
						removeFromFavourites={removeFromFavourites}
					/>
				)}/>
					<Route path="/lifestyle" exact render={()=>(
						<LifestylePage 
						AddedToFavourites={AddedToFavourites}
						addToFavourites={addToFavourites}
						removeFromFavourites={removeFromFavourites}
					/>
				)}/>
					<Route path="/about" exact component={AboutMePage} />
					<Route path='/post/:id' component={PostPage} />
					<Route path="/favourites" exact
					component={() => (
					  <Favourites AddedToFavourites={AddedToFavourites} />
					)}
				   	/>
					<Route component={Page404} />
				</Switch>
			</div>
		</main>
	)
}

export default Main