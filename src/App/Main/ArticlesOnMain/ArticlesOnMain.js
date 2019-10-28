import React from 'react'
import {Link} from 'react-router-dom'

import travel from './travel.jpeg'
import fashion from './fashion.jpg'
import lifestyle from './lifestyle.jpg'
import './articles-on-main.css'

const ArticlesOnMain = () => {
    return (
        <div className="left-column">
            <div className="homepage-post">
                <div className="post-image">
                    <img src={travel} alt=""/>
                    <div></div>
                </div>
                <p className="category-name">Travelling</p>
                <p className="news-title">Be the one to stand out in the crowed</p>
                <div className="author-and-date">
                    <span className="post-author">Dike AcAlister</span>
                    <span className="post-date">January 16,2019</span>
                </div>
                <p className="short-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcos laboris nisis ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore egiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id it laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  ut labore et dolore now is the great working with travlling magnam aliquam quaerat voluptatem.</p>
                <div className="read-more-div">
                    <Link to='/post/8'><button className="read-more-button" type="button">Read More</button></Link>
                </div>
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
            </div>
            <div className="quote-post">
                <p className="quote-text">It's about having an actives lifestyles, staying ofâ€™shealthy powers, and making the right decisions. Life is bes about balance. Not everybody wants to run a marathon, but we extra have a now days flight of stairs.</p>
                <p className="quote-author">Apolo Ohno</p>
                <div></div>
            </div>
            <div className="homepage-post">
                <div className="post-image">
                    <img src={fashion} alt=""/>
                    <div></div>
                </div>
                <p className="category-name">Fashion</p>
                <p className="news-title">Create your own standarts</p>
                <div className="author-and-date">
                    <span className="post-author">Dike AcAlister</span>
                    <span className="post-date">June 22,2019</span>
                </div>
                <p className="short-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcos laboris nisis ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore egiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id it laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  ut labore et dolore now is the great working with travlling magnam aliquam quaerat voluptatem.</p>
                <div className="read-more-div">
                    <Link to='/post/4'><button className="read-more-button" type="button">Read More</button></Link>
                </div>
                <hr/>
                <div className="post-panel">
                    <div className="panel-comment">
                        <button className="panel-comment-button" type="button"></button>
                        <div className="panel-comment-count">13</div>
                        <p>Comment</p>
                    </div>
                    <div className="panel-like">
                        <button className="panel-like-button" type="button"></button>
                        <p>Like</p>
                        <div className="panel-like-count">22</div>
                    </div>
                    <div className="panel-socials">
                        <div className="panel-web" type="button"></div>
                        <div className="panel-facebook" type="button"></div>
                        <div className="panel-twitter" type="button"></div>
                        <div className="panel-pinterest" type="button"></div>
                    </div>
                </div>
            </div>
            <div className="homepage-post">
                <div className="post-image">
                    <img src={lifestyle} alt=""/>
                    <div></div>
                </div>
                <p className="category-name">Lifestyle</p>
                <p className="news-title">Lifestyle business vs career</p>
                <div className="author-and-date">
                    <span className="post-author">Alex McDonald</span>
                    <span className="post-date">March 20,2019</span>
                </div>
                <p className="short-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcos laboris nisis ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore egiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id it laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  ut labore et dolore now is the great working with travlling magnam aliquam quaerat voluptatem.</p>
                <div className="read-more-div">
                    <Link to='/post/1'><button className="read-more-button" type="button">Read More</button></Link>
                </div>
                <hr/>
                <div className="post-panel">
                    <div className="panel-comment">
                        <button className="panel-comment-button" type="button"></button>
                        <div className="panel-comment-count">10</div>
                        <p>Comment</p>
                    </div>
                    <div className="panel-like">
                        <button className="panel-like-button" type="button"></button>
                        <p>Like</p>
                        <div className="panel-like-count">40</div>
                    </div>
                    <div className="panel-socials">
                        <div className="panel-web" type="button"></div>
                        <div className="panel-facebook" type="button"></div>
                        <div className="panel-twitter" type="button"></div>
                        <div className="panel-pinterest" type="button"></div>
                    </div>
                </div>
            </div>
            <div className="quote-post">
                <p className="quote-text">We think too small, like the frog at the bottom of the well. He thinks the sky is only as big as the top of the well. If he surfaced, he would have an entirely different view.</p>
                <p className="quote-author">Mao Zedong</p>
                <div></div>
            </div>
        </div>
    )
}

export default ArticlesOnMain