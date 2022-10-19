import React from "react";
import "./FourthSection.css";
const workType = [
	{
		title: "All",
		selected: true,
	},
	{
		title: "Graphics",
		selected: false,
	},
	{
		title: "Styles",
		selected: false,
	},
	{
		title: "User Interfaces",
		selected: false,
	},
	{
		title: "Web Design",
		selected: false,
	},
];

const gridImage = [
	{ text: "cat", value: "https://i.imgur.com/CzXTtJV.jpg" },
	{ text: "dog", value: "https://i.imgur.com/OB0y6MR.jpg" },
	{
		text: "fox",
		value: "https://farm4.staticflickr.com/3852/14447103450_2d0ff8802b_z_d.jpg",
	},
	{
		text: "cheetah",
		value: "https://farm2.staticflickr.com/1533/26541536141_41abe98db3_z_d.jpg",
	},
	{
		text: "bird",
		value: "https://farm4.staticflickr.com/3075/3168662394_7d7103de7d_z_d.jpg",
	},
	{ text: "bridge", value: "https://i.imgur.com/OnwEDW3.jpg" },
	{
		text: "lighthouse",
		value: "https://farm3.staticflickr.com/2220/1572613671_7311098b76_z_d.jpg",
	},

	{
		text: "sailboat",
		value: "https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg",
	},
];

export default function FourthSection() {
	return (
		<div id="fourthSection">
			<p className="fourth-title">THIS IS MY WORK</p>
			<ol className="option-list">
				{workType.map((item, index) => {
					return (
						<li
							style={{
								color: item.selected ? "white" : "#df5757",
								fontWeight: "500",
								fontSize: "0.9em",
								margin: 10,
								backgroundColor: item.selected
									? "#df5757"
									: "white",
								paddingInline: 13,
								paddingBlock: 5,
								borderRadius: 5,
								borderWidth: "2px",
								borderColor: "#df5757",
								borderStyle: "solid",
							}}
						>
							{item.title}
						</li>
					);
				})}
			</ol>

			<div className="image-list">
				{gridImage.map((item, index) => {
					return (
						<div
							style={{
								height: 280,
								width: 230,
								marginBottom: 20,
								fontWeight: "500",
								fontSize: "0.9em",
								borderRadius: 5,
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
								backgroundSize: "cover",
								backgroundImage: `url(${item.value})`,
							}}
						></div>
					);
				})}
			</div>
			<div className="button-container">
				<div className="button">{"MORE WORK"}</div>
			</div>
		</div>
	);
}
