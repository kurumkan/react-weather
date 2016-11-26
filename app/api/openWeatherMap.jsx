var axios = require('axios');

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=4534d0d0d3c28881836afe349b132f08&units=metric";

module.exports = {
	getTemp: function(location){
		var requestUrl = OPEN_WEATHER_MAP_URL+"&q="+encodeURIComponent(location);		

		return axios.get(requestUrl).then(function(response){						
			if(response.data.cod && response.data.message){								
				throw new Error("The location not found");
			}else{									
				return response.data.main.temp;
			}
		}, function(error){						
			throw new Error("The location not found");
		});
	}	
}

