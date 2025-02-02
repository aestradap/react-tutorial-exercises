import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Jumbotron = ({ title, description, buttonLabel, buttonURL }) => (
	// Here you have to return expected html using the properties being passed to the component

	<div className="jumbotron m-5">
		<h1 className="display-4">{title}</h1>
		<p className="lead">{description}</p>
		<a className="btn btn-primary btn-lg" href={buttonURL} role="button">
			{buttonLabel}
		</a>
	</div>
);

Jumbotron.propTypes = {
	// PropTypes here
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
};

ReactDOM.render(
	<Jumbotron
		title="Welcome to react"
		description="React is the most popular rendering library in the world"
		buttonLabel="Go to the official website"
		buttonURL="https://reactjs.org/"
	/>,

	document.querySelector("#myDiv")
);
