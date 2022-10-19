import React, { useState } from "react";
import "./FifthSection.scss";
const gridImage = [
	{
		text: "Noah Lucas",
		review: `This shirt is so soft and comfortable.
         I was a bit worried about the size running small,  but I normally wear a medium and it fits great.`,
		value: "https://i.imgur.com/CzXTtJV.jpg",
	},
	{
		text: "James Levi",
		review: "This shirt is so soft and comfortable. I was a bit worried about the size running small, but I normally wear a medium and it fits great.",
		value: "https://i.imgur.com/OB0y6MR.jpg",
	},
	{
		text: "William Jackson",
		review: "This shirt is so soft and comfortable. I was a bit worried about the size running small, but I normally wear a medium and it fits great.",
		value: "https://farm4.staticflickr.com/3852/14447103450_2d0ff8802b_z_d.jpg",
	},
	{
		text: "Daniel Benjamin",
		review: "This shirt is so soft and comfortable. I was a bit worried about the size running small, but I normally wear a medium and it fits great.",
		value: "https://farm2.staticflickr.com/1533/26541536141_41abe98db3_z_d.jpg",
	},
];

export default function FifthSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<div id="fifthSection" style={{ backgroundColor: "#ebebeb" }}>
			<p className="fifth-title">WHAT THEY SAY ABOUT ME</p>

			<div className="review-container">
				<div
					onClick={() => {
						if (activeIndex) {
							setActiveIndex(activeIndex - 1);
						}
					}}
					className="left-arrow"
				/>
				<div className="image-container">
					<img
						className="reviewer-image-item"
						src={gridImage[activeIndex].value}
					/>
				</div>

				<div
					onClick={() => {
						if (activeIndex < gridImage.length - 1) {
							setActiveIndex(activeIndex + 1);
						}
					}}
					className="right-arrow"
				/>
			</div>
			<div className="review-text-container">
				<p className="reviewer-name">{gridImage[activeIndex].text}</p>
				<p className="reviewer-review">
					{gridImage[activeIndex].review}
				</p>
			</div>
			<div className="pagination-container">
				{gridImage.map((item, index) => {
					return (
						<div className="pagination">
							<div
								style={{
									height: 10,
									width: 10,
									marginBottom: 80,
									marginTop: 45,
									marginInline: 2,
									borderRadius: 5,
									backgroundColor:
										index === activeIndex ? "pink" : "gray",
								}}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
