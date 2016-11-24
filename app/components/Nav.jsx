var React = require("react");
var {Link, IndexLink} = require("react-router");


var Nav = React.createClass({
	render: function(){
		return (
			<div>
				<IndexLink to="/" activeClassName="active" >Get Weather</IndexLink>
				<br/>
				<Link to="/about" activeClassName="active" >About</Link>
				<br/>
				<Link to="/examples" activeClassName="active" >Examples</Link>
			</div>
		);
	}
});



module.exports = Nav;