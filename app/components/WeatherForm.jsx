var React = require("react");

var WeatherForm = React.createClass({
	getInitialState: function() {
		return {
			location: ""	
		}		
	},	

	handleSubmit: function(e){
		e.preventDefault();		

		if(this.state.location){
			this.props.handleSearch(this.state.location);
			this.setState({location: ""});
		}
	},
	
	handleChange: function(e){
		this.setState({
			location: e.target.value
		});
	},

	render: function(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="search" placeholder="Enter city name" value={this.state.location} onChange={this.handleChange} />
					<br/>
					<button className="button expanded hollow">Get Weather</button>
				</form>
			</div>
		);
	}
});

module.exports = WeatherForm;