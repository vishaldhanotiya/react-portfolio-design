import React from "react";
import "../components/SecondSection.css";
export default function SecondSection() {
	return (
		<div id="secondSection">
			<p className="second-title">WHO AM I</p>
			<div className="profile-container">
				<div className="first-profile" />
				<div className="second-profile" />
				<div className="third-profile" />
			</div>
			<p className="second-subtitle">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's
				<br /> standard dummy text ever since the 1500s, when an unknown
				printer took a galley
				<br /> of type and scrambled it to make a type specimen book.
			</p>
			<p className="second-subtitle">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
			</p>
			<div className="social-container">
				<div className="facebook" />
				<div className="twitter" />
				<div className="gmail" />
				<div className="dribble" />
			</div>
		</div>
	);
}
