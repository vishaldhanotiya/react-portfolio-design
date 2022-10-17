import React from "react";

const FirstSection = (props) => {
	return (
		<div id="firstSection">
			<div
				style={{
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundAttachment: "fixed",

					backgroundImage:
						"linear-gradient(0deg, rgba(0, 0, 0, 0.1), #000),url('https://s1.1zoom.me/b5050/159/Coffee_Laptops_Hands_Table_533543_3840x2400.jpg')",
					width: "100%",
					height: 900,
				}}
			>
				<div
					style={{
						paddingInline: 10,
						paddingBlock: 5,
						display: "flex",
					}}
				>
					<div
						style={{
							width: 120,
							marginLeft: 30,
							alignItems: "center",
							display: "flex",
						}}
					>
						<div
							style={{
								backgroundPosition: "cover",
								backgroundSize: "contain",
								backgroundRepeat: "no-repeat",
								backgroundImage:
									"url('https://www.seekpng.com/png/full/913-9131600_mfs-logo-white-accor-hotels-white-logo.png')",
								width: "40%",
								height: 40,
							}}
						/>
						<p
							style={{
								marginLeft: 10,
								padding: 0,
								fontWeight: "bold",
								color: "white",
								fontSize: "1.5em",
							}}
						>
							Planus
						</p>
					</div>
					<div
						style={{
							flex: 1,
							marginInline: 40,
							alignItems: "center",
							display: "flex",
							justifyContent: "flex-end",
						}}
					>
						<div
							style={{
								paddingInline: 10,
								borderRadius: 8,
								borderWidth: "1.5px",
								borderColor: "white",
								borderStyle: "solid",
							}}
						>
							<p
								style={{
									margin: 5,
									padding: 5,
									textAlign: "center",
									color: "white",
									fontSize: "0.8em",
								}}
							>
								<a
									style={{ all: "unset" }}
									href="#firstSection"
								>
									{" "}
									Home
								</a>
							</p>
						</div>
						<div style={{ paddingInline: 10 }}>
							<p
								style={{
									margin: 5,
									padding: 0,
									color: "white",
									fontSize: "0.8em",
								}}
							>
								<a
									style={{ all: "unset" }}
									href="#secondSection"
								>
									About me
								</a>
							</p>
						</div>
						<div style={{ paddingInline: 10 }}>
							<p
								style={{
									margin: 5,
									padding: 0,
									color: "white",
									fontSize: "0.8em",
								}}
							>
								<a
									style={{ all: "unset" }}
									href="#thirdSection"
								>
									What I do
								</a>
							</p>
						</div>
						<div style={{ paddingInline: 10 }}>
							<p
								style={{
									margin: 5,
									padding: 0,
									color: "white",
									fontSize: "0.8em",
								}}
							>
								<a
									style={{ all: "unset" }}
									href="#fourthSection"
								>
									My Portfolio
								</a>
							</p>
						</div>
						<div style={{ paddingInline: 10 }}>
							<p
								style={{
									margin: 5,
									padding: 0,
									color: "white",
									fontSize: "0.8em",
								}}
							>
								<a
									style={{ all: "unset" }}
									href="#fifthSection"
								>
									Testimonial's
								</a>
							</p>
						</div>
						<div style={{ paddingInline: 10 }}>
							<p
								style={{
									margin: 5,
									padding: 0,
									color: "white",
									fontSize: "0.8em",
								}}
							>
								<a
									style={{ all: "unset" }}
									href="#sixthSection"
								>
									Blog
								</a>
							</p>
						</div>
						<div style={{ paddingInline: 10 }}>
							<p
								style={{
									margin: 5,
									padding: 0,
									color: "white",
									fontSize: "0.9em",
								}}
							>
								<a
									style={{ all: "unset" }}
									href="#seventhSection"
								>
									Contact
								</a>
							</p>
						</div>
					</div>
				</div>

				<div
					style={{
						display: "flex",
						marginTop: 130,
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<div
						style={{
							backgroundPosition: "cover",
							backgroundSize: "contain",
							backgroundRepeat: "no-repeat",
							backgroundImage:
								"url('https://www.seekpng.com/png/full/913-9131600_mfs-logo-white-accor-hotels-white-logo.png')",
							width: 170,
							height: 170,
						}}
					/>
					<p
						style={{
							fontWeight: "bold",
							color: "white",
							fontSize: "3em",
							marginTop: 40,
							padding: 0,
						}}
					>
						HELLO, I'M JAMES CORNER
					</p>
					<p
						style={{
							color: "white",
							fontSize: "1.5em",
							fontWeight: "400",
							marginTop: -20,
							padding: 0,
						}}
					>
						Mainly I do webdesign but lately I learned some magic
						things to <br />
						make your website just.... glow:)
					</p>
					<div
						style={{
							paddingInline: 15,
							borderRadius: 8,
							borderWidth: "2px",
							borderColor: "white",
							borderStyle: "solid",
						}}
					>
						<p
							style={{
								textAlign: "center",
								color: "white",
								fontSize: "0.9em",
							}}
						>
							CONTACT ME
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FirstSection;
