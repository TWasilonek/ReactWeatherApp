var webpack = require("webpack");

module.exports = {
	// Starting point - where the main code boundling the app resides
	entry: [
		// use the script-loader (script!) (save-dev packages) to load additional scripts
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		// app.jsx doesn't need a script loader
		'./app/app.jsx',
		],
	externals: {
		// register name for jQuery
		jquery: 'jQuery'
	},
	plugins: [
		// give aliases to variables $ and jQuery - now the app knows to use the
		// jquery plugins in these cases
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	// where to put the boundled code
	output: {
		// __dirname in Node.js is the current folder
		path: __dirname,
		// starting from the specified path
		filename: './public/boundle.js'
	},
	// which file types you want specifically
	resolve: {
		root: __dirname,
		// aliases for modules paths.
		// This way you type only the alias in the require() function
		alias: {
			Main: 'app/components/Main.jsx',
			Nav : 'app/components/Nav.jsx',
			Weather: 'app/components/Weather.jsx',
			About: 'app/components/About.jsx',
			Examples: 'app/components/Examples.jsx',
			WeatherForm: 'app/components/WeatherForm.jsx',
			WeatherMessage: 'app/components/WeatherMessage.jsx',
			darkSky: 'app/api/darkSky.jsx',
			ErrorModal: 'app/components/ErrorModal.jsx',
			applicationStyles: 'app/styles/app.css'
		},
		extentions: ['', '.js', '.jsx']
	},
	// Webpack by default doesn't know what to do with .jsx files.
	// To resolve this isse use the appropraite loader
	// like shown below. Packages babel-loader, react and  es2015 must be installed first.
	// Here they are downloaded with npm (check package.json)
	module: {
		loaders: [
			{
				// Use the babel-loader 
				loader: 'babel-loader',
				query: {
					// Run your code through: 1. react; 2. es2015; 3. stage-0
					// stage-0 is for experimental JS features and should be used 
					// with caution as the spec for some features is still not final! 
					// More about Babel plugins - http://babeljs.io/docs/plugins/
					presets: ['react', 'es2015', 'stage-0']
				},
				// apply this loader to all .jsx files
				test: /\.jsx?$/,
				// but exclude node_modules and bower_components folders
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	// enables source maps
	devtool: 'cheap-module-eval-source-map'
};