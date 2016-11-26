var React = require("react");
var {Link, IndexLink} = require("react-router");

module.exports = React.createClass({
	getInitialState: function(){
		return {
			location: ""
		};
	},

	onSearch: function(e){
		e.preventDefault();
		var {location} = this.state;		
		location = encodeURIComponent(location);

		if(location.length>0){
			this.setState({location: ""});			
			window.location.hash="#/?location="+location;
		}		
	},

	handleChange: function(e){
		console.log(e.target.value)
		this.setState({location: e.target.value});		
	},

	render: function(){
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">
							Weather App
						</li>
						<li>
							<IndexLink to="/" activeClassName="active" >Get Weather</IndexLink>
						</li>
						<li>
							<Link to="/about" activeClassName="active" >About</Link>			
						</li>
						<li>
							<Link to="/examples" activeClassName="active" >Examples</Link>			
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<form onSubmit={this.onSearch}>
						<ul className="menu">
							<li>
								<input type="search" placeholder="Enter city name" onChange={this.handleChange} value={this.state.location} />
							</li>
							<li>
								<button className="button">Go</button>
							</li>
						</ul>					
						
					</form>
				</div>
			</div>
		);
	}	
});
