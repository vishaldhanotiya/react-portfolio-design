import React from "react";
import "../components/FirstSection.css";
const FirstSection = (props) => {
	return (
		<div id="firstSection">
			<div className="background-image">
				<div className="header-container">
					<div className="title-container">
						<div className="logo" />
						<p className="title-text">Planus</p>
					</div>
					<div className="header">
						<div className="home">
							<p className="menu-text">
								<a href="#firstSection">Home</a>
							</p>
						</div>
						<div className="about-me">
							<p className="menu-text">
								<a href="#secondSection">About me</a>
							</p>
						</div>
						<div className="about-me">
							<p className="menu-text">
								<a href="#thirdSection">What I do</a>
							</p>
						</div>
						<div className="about-me">
							<p className="menu-text">
								<a href="#fourthSection">My Portfolio</a>
							</p>
						</div>
						<div className="about-me">
							<p className="menu-text">
								<a href="#fifthSection">Testimonial's</a>
							</p>
						</div>
						<div className="about-me">
							<p className="menu-text">
								<a href="#sixthSection">Blog</a>
							</p>
						</div>
						<div className="about-me">
							<p className="menu-text">
								<a href="#seventhSection">Contact</a>
							</p>
						</div>
					</div>
				</div>

				<div className="center-container">
					<div className="center-logo" />
					<p className="name-text">HELLO, I'M JAMES CORNER</p>
					<p className="subtitle-text ">
						Mainly I do web design but lately I learned some magic
						things to <br />
						make your website just.... glow:)
					</p>
					<div className="contact-container">
						<p className="contact-text">CONTACT ME</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FirstSection;
