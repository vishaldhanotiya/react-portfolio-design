import React from "react";
import "../components/ThirdSection.scss";
export default function ThirdSection() {
	return (
		<div id="thirdSection" className="main-background">
			<p className="third-title-text">WHAT I DO</p>

			<p className="subtitle-text">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. <br />
				Lorem Ipsum standard dummy text ever since the 1500s,
				<br /> when an unknown printer took a galley specimen book.
			</p>
			<div className="second-container">
				<div className="first-section">
					<div className="first-image" />
					<p className="web-title">Web design</p>
					<p className="web-subtitle">
						Lorem Ipsum is simply dummy text <br />
						of the printing and typesetting <br />
						industry.
					</p>
				</div>
				<div className="first-section">
					<div className="second-image" />
					<p className="web-title">Branding</p>
					<p className="web-subtitle">
						Lorem Ipsum is simply dummy text <br />
						of the printing and typesetting
						<br /> industry.
					</p>
				</div>
				<div className="first-section">
					<div className="third-image" />
					<p className="web-title">Print design</p>
					<p className="web-subtitle">
						Lorem Ipsum is simply dummy text <br />
						of the printing and typesetting <br />
						industry.
					</p>
				</div>

				<div className="first-section">
					<div className="fourth-image" />
					<p className="web-title">Illustration</p>
					<p className="web-subtitle">
						Lorem Ipsum is simply dummy text <br />
						of the printing and typesetting <br />
						industry.
					</p>
				</div>
			</div>
		</div>
	);
}
