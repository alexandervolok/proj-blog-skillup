import React from 'react'

import './lifestyle-page.css'
import CategoryPost from '../CategoryPost/CategoryPost'
import PostData from '../PostData/PostData'

const LifestylePage = (props) => {

    return (
        <div>
            <h1>Lifestyle</h1>
			<div className="category-grid">
            {
				PostData.filter(({ category }) => category === "Lifestyle").map(({
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
							{...props}
						/>
					</div>
				))
			}
			</div>
        </div>
    )
}

export default LifestylePage