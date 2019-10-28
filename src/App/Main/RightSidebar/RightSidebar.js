import React from 'react'
import {Link} from 'react-router-dom'

import './right-sidebar.css'

import adv1 from './adv1.png'
import adv2 from './adv2.png'
import facebook from './Join_Us_On_Facebook.png'
import PostData from '../PostData/PostData'

const RightSidebar = () => {
    console.log(PostData.filter(({ category }) => category === "Travel").length)
    return (
        <div className="right-sidebar">
            <div>
                <form action="" className="searchbar">
                    <input type="text" placeholder="SEARCH"/>
                    <button className="search-button" type="submit"></button>
                </form>
            </div>
            <div className="advertising1">
                <a href="/">
                    <img src={adv1} alt=""/>
                </a>
            </div>
            <div>
                <div className="home-categories">
                    <div className="home-categories-title">Categories</div>
                    <Link to='/lifestyle'>
                        <div className="home-category-box">
                            <div className="home-category-lifestyle">Lifestyle</div>
                            <div className="home-lifestyle-count">{PostData.filter(({ category }) => category === "Lifestyle").length}</div>
                        </div>
                    </Link>
                    <Link to='/fashion'>
                        <div className="home-category-box">
                            <div className="home-category-fashion">Fashion</div>
                            <div className="home-fashion-count">{PostData.filter(({ category }) => category === "Fashion").length}</div>
                        </div>
                    </Link>
                    <Link to='/travel'>
                        <div className="home-category-box">
                            <div className="home-category-travelling">Travelling</div>
                            <div className="home-travelling-count">{PostData.filter(({ category }) => category === "Travel").length}</div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="advertising2">
                <a href="/">
                    <img src={adv2} alt=""/>
                </a>
            </div>
            <div>
                <div className="home-latest-post">
                    <div className="home-latest-title">Latest posts</div>
                    <a href="/">
                        <div className="home-latest">
                            <div className="latest-img"><img src="" alt=""/></div>
                            <div className="latest-title">Be the one to stand out in the crowed</div>
                            <div className="latest-date">January 16,2019</div>
                            <div className="latest-like-count">Like 25</div>
                        </div>
                    </a>
                    <a href="/">
                        <div className="home-latest">
                            <div className="latest-img"><img src="" alt=""/></div>
                            <div className="latest-title">Create your own standarts</div>
                            <div className="latest-date">June 22,2019</div>
                            <div className="latest-like-count">Like 22</div>
                        </div>
                    </a>
                    <a href="/">
                        <div className="home-latest">
                            <div className="latest-img"><img src="" alt=""/></div>
                            <div className="latest-title">Lifestyle business vs career</div>
                            <div className="latest-date">March 20,2019</div>
                            <div className="latest-like-count">Like 40</div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="facebook-widget">
                <img src={facebook} alt=""/>
            </div>
        </div>
    )
}

export default RightSidebar