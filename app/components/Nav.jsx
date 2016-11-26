var React = require("react");
var {Link, IndexLink} = require("react-router");

module.exports = React.createClass({
	onSearch: function(e){
		e.preventDefault();
		alert("submitted!");
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
								<input type="search" placeholder="Enter city name" />
							</li>
							<li>
								<button type="button" className="button">Go</button>
							</li>
						</ul>					
						
					</form>
				</div>
			</div>
		);
	}	
});
