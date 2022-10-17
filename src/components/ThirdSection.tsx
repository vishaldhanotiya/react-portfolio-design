import React from "react";
import webDesign from "../res/imac.png";
import branding from "../res/instagram-logo.png";
import printDesign from "../res/tools-and-utensils.png";
import illustration from "../res/puzzle.png";
export default function ThirdSection() {
	return (
		<div id="thirdSection" style={{ backgroundColor: "#df5757" }}>
			<p
				style={{
					color: "white",
					paddingTop: 90,
					fontWeight: "bold",
					fontSize: "2.2em",
				}}
			>
				WHAT I DO
			</p>

			<p
				style={{
					color: "white",
					fontSize: "1em",
				}}
			>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. <br />
				Lorem Ipsum standard dummy text ever since the 1500s,
				<br /> when an unknown printer took a galley specimen book.
			</p>
			<div
				style={{
					display: "flex",
					paddingTop: 20,
					paddingBottom: 50,
					justifyContent: "center",
				}}
			>
				<div style={{ margin: 30 }}>
					<div
						style={{
							marginLeft: "auto",
							marginRight: "auto",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundSize: "contain",
							backgroundImage: `url(${webDesign})`,
							width: 70,
							height: 70,
						}}
					/>
					<p
						style={{
							color: "white",
							fontWeight: "bold",
							fontSize: "1.2em",
						}}
					>
						Web design
					</p>
					<p
						style={{
							fontSize: "0.8em",
							color: "white",
						}}
					>
						Lorem Ipsum is simply dummy text <br />
						of the printing and typesetting <br />
						industry.
					</p>
				</div>
				<div style={{ margin: 30 }}>
					<div
						style={{
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundImage: `url(${branding})`,
							width: 70,
							height: 70,
							marginLeft: "auto",
							marginRight: "auto",
						}}
					/>
					<p
						style={{
							color: "white",
							fontWeight: "bold",
							fontSize: "1.2em",
						}}
					>
						Branding
					</p>
					<p
						style={{
							fontSize: "0.8em",
							color: "white",
						}}
					>
						Lorem Ipsum is simply dummy text <br />
						of the printing and typesetting
						<br /> industry.
					</p>
				</div>
				<div style={{ margin: 30 }}>
					<div
						style={{
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundSize: "contain",
							backgroundImage: `url(${printDesign})`,
							width: 70,
							height: 70,
							marginLeft: "auto",
							marginRight: "auto",
						}}
					/>
					<p
						style={{
							color: "white",
							fontWeight: "bold",
							fontSize: "1.2em",
						}}
					>
						Print design
					</p>
					<p
						style={{
							fontSize: "0.8em",
							color: "white",
						}}
					>
						Lorem Ipsum is simply dummy text <br />
						of the printing and typesetting <br />
						industry.
					</p>
				</div>

				<div style={{ margin: 30 }}>
					<div
						style={{
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundSize: "contain",
							backgroundImage: `url(${illustration})`,
							width: 70,
							height: 70,
							marginLeft: "auto",
							marginRight: "auto",
						}}
					/>
					<p
						style={{
							color: "white",
							fontWeight: "bold",
							fontSize: "1.2em",
						}}
					>
						Illustration
					</p>
					<p
						style={{
							fontSize: "0.8em",
							color: "white",
						}}
					>
						Lorem Ipsum is simply dummy text <br />
						of the printing and typesetting <br />
						industry.
					</p>
				</div>
			</div>
		</div>
	);
}
