import React, {Component} from 'react'

import "./carousel.css";
import { Carousel } from 'react-responsive-carousel';

import './slider.css'

class Slider extends Component {
	render () {
    return (
        <div className="slider">
			<Carousel
				showThumbs={false}
				showStatus={false}
				infiniteLoop={true}
				axis='vertical'
				autoPlay={true}
			>
				<div className="slide">
					<img src="images/slider/slider_image_1.png" alt=""/>
					<span className="slide-text">
						<h2>Latest News</h2>
						<p>Bodybuilding best for your health</p>
					</span>
					<span className="slide-title">
						FEATURED ARTICLE
					</span>
				</div>
				<div className="slide">
					<img src="/images/slider/earth.jpg" alt=""/>
						<span className="slide-text">
						<h2>Secondory News</h2>
						<p>Our planet is struggling</p>
					</span>
					<span className="slide-title">
						SECOND ARTICLE
					</span>
				</div>
				<div className="slide">
					<img src="images/slider/slider3.jpg" alt=""/>
						<span className="slide-text">
						<h2>Other News</h2>
						<p>How to do cool slider</p>
					</span>
					<span className="slide-title">
						THIRD ARTICLE
					</span>
				</div>
			</Carousel>
		</div>
    )
}
}

export default Slider