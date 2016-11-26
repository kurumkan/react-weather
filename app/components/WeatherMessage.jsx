var React = require("react");

module.exports = (props) => {
	var {temp, location} = props;
	return(
		<div>
			<h3 className="text-center">
				The temperature in {location} is {temp}
			</h3>			
		</div>
	);
}