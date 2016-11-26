var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

	getInitialState: function(){
		return {
			isLoading: false,
			errorMessage: null
		};	
	},

	componentWillReceiveProps: function(nextProps){
		var location = nextProps.location.query.location;

		if(location&&location.length>0){
			this.handleSearch(location);
			window.location.hash="#/";
		}
	},

	handleSearch: function(location){
		var _this = this;
		this.setState({
			isLoading: true,
			errorMessage: null,
			location: null,
			temp: null			
		}, function(){
			openWeatherMap.getTemp(location).then(function(temp){			
				_this.setState({
					isLoading: false,
					location: location,
					temp: temp				
				});			
				console.log("SUCCESS", temp)
			}, function(error){	
				console.log("error", error.message)	
				_this.setState({
					isLoading: false,
					errorMessage: error.message
				});					
			});
		});
	},

	componentDidMount: function(){
		var location = this.props.location.query.location;

		if(location&&location.length>0){
			this.handleSearch(location);
			window.location.hash="#/";
		}
	},

	render: function(){		
		var {isLoading, temp, location, errorMessage} = this.state;

		function renderMessage(){
			if(isLoading){
				return <h3 className="text-center">Loading ... </h3>
			}else if(location){
				return <WeatherMessage temp={temp} location={location}/>;
			}		
		}
		
		function renderError(){
			if (errorMessage) {
				console.log("inside renderError")
				return (
					<ErrorModal message={errorMessage}/>
				)
			}
		}

		return (			
			<div>
				<h1 className="text-center page-title">Get Weather</h1>				
				<WeatherForm handleSearch={this.handleSearch}/>
				{renderMessage()}				
				{renderError()}		
			</div>
		);
	}
});

module.exports = Weather;