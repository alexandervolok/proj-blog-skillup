import React from 'react'

import './fashion-page.css'
import CategoryPost from '../CategoryPost/CategoryPost'
import PostData from '../PostData/PostData'

const FashionPage = ({
	AddedToFavourites,
	addToFavourites,
	removeFromFavourites,
}) => {
    return (
        <div>
            <h1>Fashion</h1>
			<div className="category-grid">
            {
				PostData.filter(({ category }) => category === "Fashion").map(({
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

export default FashionPage