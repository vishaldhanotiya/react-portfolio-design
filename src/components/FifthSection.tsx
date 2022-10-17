import React, { useState } from "react";
import leftArrow from "../res/left-arrow.png";
import rightArrow from "../res/right-arrow.png";
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
			<p
				style={{
					color: "gray",
					paddingTop: 80,
					fontWeight: "bold",
					fontSize: "2em",
				}}
			>
				WHAT THEY SAY ABOUT ME
			</p>

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div
					onClick={() => {
						if (activeIndex) {
							setActiveIndex(activeIndex - 1);
						}
					}}
					style={{
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundSize: "contain",
						backgroundImage: `url(${leftArrow})`,
						borderRadius: 20,
						width: 40,
						marginRight: 30,
						height: 40,
					}}
				/>
				<div
					style={{
						marginBlock: 10,

						display: "block",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<div
						style={{
							backgroundImage: `url(${gridImage[activeIndex].value})`,
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundSize: "cover",
							borderRadius: 60,
							marginLeft: "auto",
							marginRight: "auto",
							width: 120,
							height: 120,
						}}
					/>
				</div>

				<div
					onClick={() => {
						if (activeIndex < gridImage.length - 1) {
							setActiveIndex(activeIndex + 1);
						}
					}}
					style={{
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundSize: "contain",
						backgroundImage: `url(${rightArrow})`,
						borderRadius: 20,
						marginLeft: 30,

						width: 40,
						height: 40,
					}}
				/>
			</div>
			<div
				style={{
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<p
					style={{
						color: "gray",
						fontWeight: "bold",
						fontSize: "1.2em",
					}}
				>
					{gridImage[activeIndex].text}
				</p>
				<p
					style={{
						fontSize: "0.8em",
						color: "gray",
					}}
				>
					{gridImage[activeIndex].review}
				</p>
			</div>
			<div
				style={{
					justifyContent: "center",
					display: "flex",
					marginInline: 20,
				}}
			>
				{gridImage.map((item, index) => {
					return (
						<div
							style={{
								display: "flex",
								justifyContent: "center",
							}}
						>
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
