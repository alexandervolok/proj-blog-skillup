import React from 'react'

import './footer.css'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-grid">
					<div className="footer-about">
						<h2>ABOUT BLOG</h2>
						<p>Lorem ipsum dolor sit amet, conser adipisicing  esse cillum dolore nulla pariatur.</p>
						<div></div>
					</div>
					<div className="footer-latest-tweets">
						<h2>Latest tweets</h2>
						<div>
							<h3>@Twitter@magicalrebekah</h3>
							<p>Developer Advocate @heyval isaiyou knows the very well is about things .</p>
						</div>
						<br/><br/>
						<div>
							<h3>@Twitter@magicalrebekah</h3>
							<p>Developer Advocate hav a great work this knows the very well is about things .</p>
						</div>
					</div>
					<div className="footer-instagram">
						<h2>Follow me instagram</h2>
						<div className="insta-gallery">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
					<div className="footer-latest-comments">
						<h2>Latest comment</h2>
						<div>
							<p>From Alex :</p>
							<p>Developer Advocate @heyval isaiyou know the very well is talking about things .</p>
						</div>
						<hr/>
						<div>
							<p>From Jhon Doe :</p>
							<p>Developer Advocate @heyval isaiyou know the very well is talking about things .</p>
						</div>
					</div>
				</div>
			</div>
			<div className="copyright">&copy;2019 copyright. all right reserved by Alexander Volok   i   terms policy   i   disclaimer</div>
		</footer>
	)
}

export default Footer