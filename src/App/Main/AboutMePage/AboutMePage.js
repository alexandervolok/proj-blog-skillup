import React, {Component} from 'react'

import './about-me-page.css'

class AboutMePage extends Component {

    googleFrame = () => {
        return <iframe title="Google iFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.6516560371747!2d30.519837015486708!3d50.447588795452496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce56b2456d3b%3A0xd062ae171b57e947!2z0YPQuy4g0JrRgNC10YnQsNGC0LjQuiwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1572273248395!5m2!1sru!2sua" width="100%" height="500px" frameBorder="0" allowFullScreen="" style={{ textAlign: 'center' }}></iframe>;
    }

    render () {
    return (
        <div>
            <h1>About Me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facere aspernatur, aperiam minus ullam totam non deserunt dolorum expedita numquam corrupti laboriosam magni, beatae eos a ea dolores ab ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis a reiciendis sint. Distinctio a earum praesentium mollitia odit numquam veniam quas repellendus eius similique nobis error ea expedita, quos delectus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat aut aperiam blanditiis a molestiae ipsum odio corporis, magni non commodi beatae at ea, ut repellat laudantium, optio dolores culpa! Saepe.</p>
            <div className="map" >
                {this.googleFrame()}
            </div>
        </div>
    )
}
}

export default AboutMePage
