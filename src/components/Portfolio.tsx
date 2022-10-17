import React from "react";
import FirstSection from "../components/FirstSection.tsx";
import FifthSection from "./FifthSection.tsx";
import FourthSection from "./FourthSection.tsx";
import SecondSection from "./SecondSection.tsx";
import SeventhSection from "./SeventhSection.tsx";
import SixthSection from "./SixthSection.tsx";
import ThirdSection from "./ThirdSection.tsx";

const Portfolio = (props) => {
	return (
		<div>
			<FirstSection {...props} />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
			<FifthSection />
			<SixthSection />
			<SeventhSection />
		</div>
	);
};

export default Portfolio;
