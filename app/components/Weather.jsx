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

	handleSearch: function(location){
		this.setState({
			isLoading: true			
		});
		var _this = this;
		
		openWeatherMap.getTemp(location).then(function(temp){			
			_this.setState({
				location: location,
				temp: temp,
				isLoading: false
			});			
			console.log("SUCCESS", temp)
		}, function(error){	
			console.log("error", error.message)	
			_this.setState({
				isLoading: false,
				errorMessage: error.message
			});					
		});
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