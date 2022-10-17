import React from "react";

export default function SecondSection() {
	return (
		<div id="secondSection">
			<p
				style={{
					color: "#579e6b",
					paddingTop: 50,
					fontWeight: "bold",
					fontSize: "2.2em",
				}}
			>
				WHO AM I
			</p>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<div
					style={{
						backgroundRepeat: "no-repeat",

						backgroundPosition: "center",
						backgroundSize: "contain",
						backgroundImage:
							"url('https://images.news18.com/ibnlive/uploads/2022/07/5b64ef07d608085cf4b239ddfeda4a8d.png')",
						borderRadius: 60,
						margin: 10,
						width: 120,
						height: 120,
					}}
				/>
				<div
					style={{
						backgroundRepeat: "no-repeat",

						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundImage:
							"url('https://www.geo.tv/assets/uploads/updates/2022-05-14/416884_7263099_updates.jpg')",

						borderRadius: 60,
						margin: 10,
						width: 120,
						height: 120,
					}}
				/>
				<div
					style={{
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundSize: "contain",
						backgroundImage:
							"url('https://pbs.twimg.com/media/Br9E1KRIUAAMXHF.png')",

						borderRadius: 60,
						margin: 10,
						width: 120,
						height: 120,
					}}
				/>
			</div>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's
				<br /> standard dummy text ever since the 1500s, when an unknown
				printer took a galley
				<br /> of type and scrambled it to make a type specimen book.
			</p>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
			</p>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginBottom: 50,
				}}
			>
				<div
					style={{
						backgroundRepeat: "no-repeat",

						backgroundPosition: "center",
						backgroundSize: "contain",
						backgroundImage:
							"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxnElBsczg7ZOupqJoNqOr1JRs8MUWGsiFNTvs-PfdnhnKGMcxAGn9nMQ5CdQEC_OlPQ&usqp=CAU')",
						borderRadius: 25,
						marginBlock: 15,
						marginInline: 5,
						width: 50,
						height: 50,
					}}
				/>
				<div
					style={{
						backgroundRepeat: "no-repeat",

						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundImage:
							"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMO2BMpfaHRHGZV7Ft1PFzXcOBWBidw_XNX4OsE0BwH4St7Z4Eq9MvlTeh1d_gpp-3cMI&usqp=CAU')",

						borderRadius: 25,
						marginBlock: 15,
						marginInline: 5,

						width: 50,
						height: 50,
						backgroundColor: "red",
					}}
				/>
				<div
					style={{
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundSize: "contain",
						backgroundImage:
							"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDJiiUrxfnnMTOZqNWY-iDLz_D1AlJtHdVvbO3-sXD2iVb_CUD3wj13TYZ1kCBjAsTSVg&usqp=CAU')",
						borderRadius: 25,
						marginBlock: 15,
						marginInline: 5,

						width: 50,
						height: 50,
						backgroundColor: "blue",
					}}
				/>
				<div
					style={{
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundSize: "contain",
						backgroundImage:
							"url('data:image/png;base64,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')",
						borderRadius: 25,
						marginBlock: 15,
						marginInline: 5,

						width: 50,
						height: 50,
						backgroundColor: "blue",
					}}
				/>
			</div>
		</div>
	);
}
