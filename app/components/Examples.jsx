var React = require("react");
var {Link} = require("react-router");

module.exports = (props)=>{
	return (
		<div>
			<h1 className="text-center">Examples</h1>
			<p>	
				Here are a few example locations to try out
			</p>
			<ol>
				<li>
					<Link to="/?location=Kurumkan">Kurumkan</Link>
				</li>
				<li>
					<Link to="/?location=Osaka">Osaka</Link>
				</li>
			</ol>			
		</div>
	);
};