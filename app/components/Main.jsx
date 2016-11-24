var React = require("react");
var Nav = require("Nav");

module.exports = (props)=>{
	return (
		<div>
			<Nav/>
			<h1>Get Weather</h1>
			{props.children}
		</div>	
	);
}
