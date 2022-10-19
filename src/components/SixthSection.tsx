import React from "react";
import "./SixthSection.css";
const gridImage = [
	{
		text: "Another blog post",
		subTitle: `Lorem Ipsum is simply dummy text
    of the printing and typesetting`,
		value: "https://i.imgur.com/CzXTtJV.jpg",
	},
	{
		text: "Creative jobs",
		subTitle: `Lorem Ipsum is simply dummy text
    of the printing and typesetting`,
		value: "https://i.imgur.com/OB0y6MR.jpg",
	},
	{
		text: "The Planus Post",
		subTitle: `Lorem Ipsum is simply dummy text 
        of the printing and typesetting`,
		value: "https://farm4.staticflickr.com/3852/14447103450_2d0ff8802b_z_d.jpg",
	},
	{
		text: "Every city has some lights",
		subTitle: `Lorem Ipsum is simply dummy text
        of the printing and typesetting`,
		value: "https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg",
	},
];

export default function SixthSection() {
	return (
		<div id="sixthSection">
			<p className="sixth-title">MY BLOG</p>

			<div className="blog-list">
				{gridImage.map((item, index) => {
					return (
						<div
							style={{
								margin: 15,
								height: 240,
								width: 200,
								fontWeight: "500",
								fontSize: "0.9em",
								borderRadius: 5,
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
								backgroundSize: "cover",
								backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.4), #000),url(${item.value})`,
							}}
						>
							<div className="blog-text-container">
								<p className="blog-title">{item.text}</p>
								<p className="blog-content">{item.subTitle}</p>
							</div>
						</div>
					);
				})}
			</div>
			<div className="blog-button-container">
				<div className="blog-button">{"Read More Blog"}</div>
			</div>
		</div>
	);
}
