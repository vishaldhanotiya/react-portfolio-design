import React from "react";
import location from "../res/pin.png";
import email from "../res/email.png";
import call from "../res/call.png";
export default function SeventhSection() {
	return (
		<div id="seventhSection" style={{ backgroundColor: "#579e6b" }}>
			<p
				style={{
					color: "white",
					paddingTop: 80,
					fontWeight: "bold",
					fontSize: "2em",
				}}
			>
				LET'S GET IN TOUCH
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
					justifyContent: "center",
				}}
			>
				<div style={{ margin: 20 }}>
					<div
						style={{
							marginLeft: "auto",
							marginRight: "auto",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundSize: "contain",
							backgroundImage: `url(${location})`,
							width: 40,
							height: 40,
						}}
					/>

					<p
						style={{
							fontSize: "0.8em",
							color: "white",
						}}
					>
						Big Street AVE, 254 Los Angeles <br />
						California
					</p>
				</div>
				<div style={{ margin: 20 }}>
					<div
						style={{
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundImage: `url(${email})`,
							width: 40,
							height: 40,
							marginLeft: "auto",
							marginRight: "auto",
						}}
					/>

					<p
						style={{
							fontSize: "0.8em",
							color: "white",
						}}
					>
						contact@planus.com
					</p>
				</div>
				<div style={{ margin: 20 }}>
					<div
						style={{
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundSize: "contain",
							backgroundImage: `url(${call})`,
							width: 40,
							height: 40,
							marginLeft: "auto",
							marginRight: "auto",
						}}
					/>

					<p
						style={{
							fontSize: "0.8em",
							color: "white",
						}}
					>
						(544)-746-28902
					</p>
				</div>
			</div>
			<div style={{ display: "block", justifyContent: "center" }}>
				<input
					placeholder="Name"
					style={{
						width: 450,
						height: 30,
						paddingInline: 10,
						borderLeftWidth: 0,
						borderRightWidth: 0,
						borderTopWidth: 0,
						marginBottom: 10,

						borderBottomWidth: 2,
						backgroundColor: "#529563",
						borderBottomColor: "white",
					}}
				/>
				<br />
				<input
					placeholder="Email"
					style={{
						color: "white",

						width: 450,
						height: 30,
						paddingInline: 10,
						borderLeftWidth: 0,
						borderRightWidth: 0,
						borderTopWidth: 0,
						marginBottom: 10,
						borderBottomWidth: 2,
						backgroundColor: "#529563",
						borderBottomColor: "white",
					}}
				/>
				<br />
				<input
					style={{
						width: 450,
						paddingInline: 10,
						height: 90,
						borderLeftWidth: 0,
						borderRightWidth: 0,
						borderTopWidth: 0,
						marginBottom: 5,
						borderBottomWidth: 2,
						backgroundColor: "#529563",
						borderBottomColor: "white",
					}}
				/>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignSelf: "center",
					}}
				>
					<div
						style={{
							color: "white",
							fontWeight: "500",
							fontSize: "0.9em",
							margin: 20,
							marginBottom: 50,
							backgroundColor: "#529563",
							paddingInline: 15,
							paddingBlock: 8,
							borderRadius: 5,
							borderWidth: "2px",
							borderColor: "white",
							borderStyle: "solid",
						}}
					>
						{"Read More Blog"}
					</div>
				</div>
			</div>
		</div>
	);
}
