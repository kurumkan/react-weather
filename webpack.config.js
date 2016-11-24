module.exports = {
	//starting point of our app
	entry: './app/app.jsx',
	//where to put the output
	output: {
		path: __dirname,		
		filename: './public/bundle.js'
	},
	resolve: {
		//where to lookup the files
		root:__dirname,
		alias: {		
			Main: "app/components/Main.jsx",
			Nav: "app/components/Nav.jsx",
			About: "app/components/About.jsx",
			Examples: "app/components/Examples.jsx",
			WeatherForm: "app/components/WeatherForm.jsx",
			WeatherMessage: "app/components/WeatherMessage.jsx",
			Weather: "app/components/Weather.jsx",	
			openWeatherMap: "app/api/openWeatherMap.jsx"
		},		
		//what file extensions?
		extensions: ['', '.js','.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	}
};	