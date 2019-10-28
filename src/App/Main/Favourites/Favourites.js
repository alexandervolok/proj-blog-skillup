import React from 'react'

import './favourites.css'
import CategoryPost from '../CategoryPost/CategoryPost'
import PostData from '../PostData/PostData'

const Favourites = (props) => {
	const {AddedToFavourites} = props;
	const hasData = (id) => Object.keys(AddedToFavourites).filter(k => Number(k) === Number(id))[0];
    return (
        <div>
            <h1>Favourites</h1>
			<div className="category-grid">
            {PostData.filter(({ id }) => !!hasData(id)).map(({ id, title, shortDescription, date, image }) => (
            		<div key={id}>
						<CategoryPost
							id={id}
							image={image}
							title={title}
							date={date}
							shortDescription={shortDescription}
						/>
					</div>
				)
			)}
			</div>
        </div>
    )
}

export default Favourites