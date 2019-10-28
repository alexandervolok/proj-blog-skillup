import React from 'react'

import './subscribe.css'

const Subscribe = () => {
    return (
        <div className="subscribe">
            <form action="" className="subscribe-form">
                <div>
                    <p>Signup to Newsletter</p>
                </div>
                <div>
                    <input type="text" placeholder="Your Name"/>
                </div>
                <div>
                    <input type="text" placeholder="Your Email Address"/>
                </div>
                <div>
                    <button type="submit">Subscribe Now</button>
                </div>
            </form>
		</div>
    )
}

export default Subscribe