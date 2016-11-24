var React = require("react");

var WeatherMessage = React.createClass({
	render: function(){
		var {temp, location} = this.props;
		return(
			<div>
				The temperature in {location} is {temp}
			</div>
		);
	}
});

module.exports = WeatherMessage;