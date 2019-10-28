import React, {Component} from 'react'

import './post-page.css'
import RightSidebar from '../RightSidebar/RightSidebar'
import PostData, {getPostMap} from '../PostData/PostData'

import {Link} from 'react-router-dom'

class PostPage extends Component {

    render () {
        const {
        id,
        match,
        postMap = getPostMap(PostData)
    } = this.props;

    const prev = Number(match.params.id) - 1;
    const next = Number(match.params.id) + 1;
    const hasPrev = prev > 0;
    const hasNext = Object.keys(postMap).length >= next;

    return (
        <div className="main-grid">
            <div className='post-div'>
                <div className="post-image">
                    <img src={postMap[match.params.id].image} alt=""></img>
                    <div></div>
                </div>
                <div className="category-name">{postMap[match.params.id].category}</div>
                <h1 className="post-title">{postMap[match.params.id].title}</h1>
                <div className="author-and-date">
                    <span className="post-author">{postMap[match.params.id].author}</span>
                    <span className="post-date">{postMap[match.params.id].date}</span>
                </div>
                <div className="full-text">{postMap[match.params.id].fullDescription}</div>
                <hr/>
                <div className="post-panel">
                    <div className="panel-comment">
                        <button className="panel-comment-button" type="button"></button>
                        <div className="panel-comment-count">16</div>
                        <p>Comment</p>
                    </div>
                    <div className="panel-like">
                        <button className="panel-like-button" type="button"></button>
                        <p>Like</p>
                        <div className="panel-like-count">25</div>
                    </div>
                    <div className="panel-socials">
                        <div className="panel-web" type="button"></div>
                        <div className="panel-facebook" type="button"></div>
                        <div className="panel-twitter" type="button"></div>
                        <div className="panel-pinterest" type="button"></div>
                    </div>
                </div>
                <div className="prev-next-buttons">
                {hasPrev && (
                    <Link to={`/post/${prev}`}>
                    <button className="prev-post-btn">Previous post</button>
                    </Link>
                )}
                {hasNext && (
                    <Link to={`/post/${next}`}>
                    <button className="next-post-btn">Next post</button>
                    </Link>
                )}
                </div>
            </div>
            <RightSidebar />
        </div>
    )
}
}

export default PostPage