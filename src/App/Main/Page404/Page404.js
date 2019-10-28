import React from 'react'
import {Link} from 'react-router-dom'

import './page404.css'

const Page404 = () => {
    return (
        <div className="page404-template">
            <div className="page404">
                <div className="number404">404</div>
                <div className="warning404">Uh-oh! nothing found</div>
            </div>
            <div className="appologize">Sorry!</div>
            <div className="solution">The page you are looking for does not exist or another error occurre</div>
            <div className="back-home"><Link to="/">GO BACK HOME</Link></div>
		</div>
    )
}

export default Page404