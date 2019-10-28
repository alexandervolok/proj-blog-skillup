import React from 'react'

import './header.css'

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Socials from './Socials/Socials'



const Header = (props) => {
	return (
		<header className="header">
			<div className="container">
				<div className="header-grid">
					<Menu/>
					<Logo/>
					<Socials 
					{...props}
					/>
					<div></div>
				</div>
			</div>
		</header>
	)
}

export default Header
