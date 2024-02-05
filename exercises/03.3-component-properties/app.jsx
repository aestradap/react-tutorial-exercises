import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = (props) => {
	// 1) Replace the hard-coded image, description, link, etc. With their property variable
	return (
		<div className="card m-5">
			<img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonUrl} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};
BootstrapCard.propTypes = {
	title: PropType.string,
	// 2) Add here the new properties into the proptypes object
};

// 3) Use ReactDOM to add the component into then DOM element #myDiv

// const obj = {
// 	imageUrl: "https://pickinguprockscom.files.wordpress.com/2020/12/2szfav4x2w451.jpg?w=1003",
// 	description:
// 		"Sir James Paul McCartney CH MBE is an English singer, songwriter and musician who gained worldwide fame with the Beatles, for whom he played bass guitar and shared primary songwriting and lead vocal duties with John Lennon.",
// 	buttonUrl: "https://en.wikipedia.org/wiki/Paul_McCartney",
// 	buttonLabel: "Go to Wiki",
// };
const obj = {};

ReactDOM.render(
	<BootstrapCard 
	imageUrl ="https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true"
	description = "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
	title = "Bob Dylan"
	buttonUrl = "https://en.wikipedia.org/wiki/Bob_Dylan"
	buttonLabel = "Go to wikipedia" />,
	document.querySelector("#myDiv")
);
