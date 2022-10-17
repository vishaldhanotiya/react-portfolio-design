import React from "react";

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
			<p
				style={{
					color: "gray",
					paddingTop: 50,
					fontWeight: "bold",
					fontSize: "2.2em",
				}}
			>
				MY BLOG
			</p>

			<div
				style={{
					justifyContent: "center",
					display: "flex",
					marginInline: 20,
					gridTemplateColumns: "300px 300px 300px 300px",
					listStyle: "none",
				}}
			>
				{gridImage.map((item, index) => {
					return (
						<div
							style={{
								margin: 15,
								height: 240,
								width: 220,
								fontWeight: "500",
								fontSize: "0.9em",
								borderRadius: 5,
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
								backgroundSize: "cover",
								backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.4), #000),url(${item.value})`,
							}}
						>
							<div
								style={{
									margin: 5,
									padding: 0,
								}}
							>
								<p
									style={{
										marginTop: 50,
										color: "white",
										fontWeight: "bold",
										fontSize: "1.2em",
									}}
								>
									{item.text}
								</p>
								<p
									style={{
										marginTop: 50,

										fontSize: "0.8em",
										color: "white",
									}}
								>
									{item.subTitle}
								</p>
							</div>
						</div>
					);
				})}
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignSelf: "center",
				}}
			>
				<div
					style={{
						color: "#df5757",
						fontWeight: "500",
						fontSize: "0.9em",
						margin: 20,
						marginBottom: 50,

						backgroundColor: "white",
						paddingInline: 15,
						paddingBlock: 8,
						borderRadius: 5,
						borderWidth: "2px",
						borderColor: "#df5757",
						borderStyle: "solid",
					}}
				>
					{"Read More Blog"}
				</div>
			</div>
		</div>
	);
}
