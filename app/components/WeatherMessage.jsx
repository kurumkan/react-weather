var React = require("react");

module.exports = (props) => {
	var {temp, location} = props;
	return(
		<div>
			The temperature in {location} is {temp}
		</div>
	);
}