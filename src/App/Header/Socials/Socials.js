import React from 'react'
import {Link} from 'react-router-dom'

import './socials.css'

const Socials = (props) => {
    return (
        <div className="socials">
            <div>
                <Link to='/favourites'><div className="fav"></div></Link>
                <div className="fav-counter">
                    {!!props.AddedToFavourites
                    ? Object.keys(props.AddedToFavourites).length
                    : 0}
                </div>
            </div>
            <div>
                <button className="twitter"></button>
            </div>
            <div>
                <button className="tumbler"></button>
            </div>
            <div>
                <button className="facebook"></button>
            </div>
            <div>
                <button className="search"></button>
            </div>
		</div>
    )
}

export default Socials