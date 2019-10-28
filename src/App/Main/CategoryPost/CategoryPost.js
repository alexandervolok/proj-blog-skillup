import React, {Component} from 'react'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'

import './category-post.css'
import PostData from '../PostData/PostData'

class CategoryPost extends Component {

    renderFavButton = () => {
        const {
            id,
            AddedToFavourites,
	        addToFavourites,
	        removeFromFavourites
        } = this.props;

        if (AddedToFavourites && AddedToFavourites[id]) {
            removeFromFavourites && removeFromFavourites(id);
          } else {
            addToFavourites && addToFavourites(id);
          }
        };


    render() {
        const {
            title,
            shortDescription,
            date,
            image,
            id,
            AddedToFavourites,
    } = this.props
    
    return (
        <div className="category-post">
            <div className="category-post-image">
                <img src={image} alt=""></img>
                <div></div>
                <button className="fav-button" onClick={() => this.renderFavButton()}>
                    {AddedToFavourites && AddedToFavourites[id] ? (
                    <div className="favourited" />
                    ) : (
                    <div className="not-favourited" />
                    )}
                </button>
            </div>
            <p className="category-post-title"><Link to={`/post/${id}`}>{title}</Link></p>
            <div className="category-post-date">{date}</div>
            <p className="category-post-short-text">{shortDescription}</p>
            <div className="category-post-button-more-div">
                <div className="category-post-button-more" type="button"><Link to={`/post/${id}`}>READ MORE</Link></div>
            </div>
        </div>
    )
    }
}

PostData.propTypes = {
    title:propTypes.string.isRequired
}

export default CategoryPost