import React from "react"; // Main React.js library

import ReactDOM from "react-dom"; // We use ReactDOM to render into the DOM

// This function returns a string that will be rendered
export const PrintHello = () => {
	return <h1>Hello World</h1>;
};
export const PrintLoveReact = () => {
	return <h1>I Love React</h1>;
};

//              what           where
ReactDOM.render(PrintLoveReact(), document.querySelector("#myDiv"));
