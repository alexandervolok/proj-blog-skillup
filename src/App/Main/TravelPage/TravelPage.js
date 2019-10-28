import React from 'react'

import './travel-page.css'
import CategoryPost from '../CategoryPost/CategoryPost'
import PostData from '../PostData/PostData'

const TravelPage = ({
	AddedToFavourites,
	addToFavourites,
	removeFromFavourites,
}) => {
    return (
        <div>
            <h1>Travel</h1>
			<div className="category-grid">
            {
				PostData.filter(({ category }) => category === "Travel").map(({
					id,
					title,
					shortDescription,
					date,
					image,
				})=>(
					<div key={id}>
						<CategoryPost
							id={id}
							image={image}
							title={title}
							date={date}
							shortDescription={shortDescription}
							AddedToFavourites={AddedToFavourites}
							addToFavourites={addToFavourites}
							removeFromFavourites={removeFromFavourites}
						/>
					</div>
				))
			}
			</div>
        </div>
    )
}

export default TravelPage