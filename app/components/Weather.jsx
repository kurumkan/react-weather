var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

	getInitialState: function(){
		return {
			isLoading: false
		};	
	},

	handleSearch: function(location){
		this.setState({isLoading: true});
		var _this = this;
		
		openWeatherMap.getTemp(location).then(function(temp){			
			_this.setState({
				location: location,
				temp: temp,
				isLoading: false
			});			
			console.log("SUCCESS", temp)
		}, function(error){			
			console.log("ERROR", error)
		});
	},

	render: function(){		
		var {isLoading, temp, location} = this.state;

		function renderMessage(){
			if(isLoading){
				return <h3>Loading ... </h3>
			}else if(temp && location){
				return <WeatherMessage temp={temp} location={location}/>;
			}		
		}

		return (			
			<div>				
				<WeatherForm handleSearch={this.handleSearch}/>
				{renderMessage()}				
			</div>
		);
	}
});

module.exports = Weather;