import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// Add the green inside this function
const Alert = ({ text, color }) => {
	const colorClasses = {
		red: "alert-danger",
		yellow: "alert-warning",
		green: "alert-success",
	};

	if (colorClasses[color] === undefined) alert(`The color ${color} is not in the possible list of colors`);

	return (
		<div className={`alert ${colorClasses[color]}`} role="alert">
			{text}
		</div>
	);
};
Alert.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
};

// Here is where the <Alert /> component is being used, you don't have to edit this part
// But it helps you understand what properties is the component using
ReactDOM.render(
	<div>
		<Alert text="OMG! Something really bad has happened!" color="red" />
		<Alert text="Well, it is not that bad after all!" color="yellow" />
		<Alert text="I am supposed to be green" color="green" />
	</div>,
	document.querySelector("#myDiv")
);
