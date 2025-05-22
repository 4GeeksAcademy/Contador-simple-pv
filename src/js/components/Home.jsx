import React from "react";
import SecondsCounter from "./SecondsCounter";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<SecondsCounter seconds={time}/>
		</div>
	);
};

export default Home;