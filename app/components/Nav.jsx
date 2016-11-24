var React = require("react");
var {Link, IndexLink} = require("react-router");

module.exports = (props)=>{
	return (
		<div>
			<IndexLink to="/" activeClassName="active" >Get Weather</IndexLink>
			<br/>
			<Link to="/about" activeClassName="active" >About</Link>
			<br/>
			<Link to="/examples" activeClassName="active" >Examples</Link>
		</div>
	);
};
