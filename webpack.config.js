const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: [
		"react-hot-loader/patch",
		"./src/index.tsx"
	],
	devtool: 'source-map',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new CopyWebpackPlugin([
			{from: './node_modules/react/umd/react.development.js', to: 'libs/react.js'},
			{from: './node_modules/react-dom/umd/react-dom.development.js', to: 'libs/react-dom.js'},
			{from: './node_modules/redux/dist/redux.js', to: 'libs/redux.js'},
			{from: './node_modules/react-redux/dist/react-redux.js', to: 'libs/react-redux.js'},
			{from: './node_modules/font-awesome/css/font-awesome.css', to: 'css/font-awesome.css'}
		]),
		new HtmlWebpackPlugin({
			title: 'Task Manager',
			filename: 'index.html',
			inject: true,
			template: 'index.template.html',
			chunksSortMode: 'dependency'
		}),
		new HtmlWebpackIncludeAssetsPlugin({
			assets: [
				"libs/react.js",
				"libs/react-dom.js",
				"libs/redux.js",
				"libs/react-redux.js",
				"css/font-awesome.css"
			], append: false
		}),
		// HOT MODULE REPLACEMENT
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				loaders: ['react-hot-loader/webpack', 'awesome-typescript-loader'],
				exclude: path.resolve(__dirname, "node_modules")
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader',
				options: {
					limit: 100000
				}
			},
			{
				test: /\.(scss|css)$/,
				exclude: /node_modules|global_style/,
				use: [{
					loader: 'style-loader', // inject CSS to page
				}, {
					loader: 'css-loader', // translates CSS into CommonJS modules
					options: {
						modules: true,
						localIdentName: '[name]__[local]'
					}
				}, {
					loader: 'postcss-loader', // Run post css actions
					options: {
						plugins: function () {
							return [
								require('autoprefixer')
							];
						}
					}
				}, {
					loader: 'sass-loader',
					options: {					}
				}]
			},
			{
				test: /\.(scss|css)$/,
				include: /node_modules|global_style/,
				use: [{
					loader: 'style-loader', // inject CSS to page
				}, {
					loader: 'css-loader', // translates CSS into CommonJS modules
				}, {
					loader: 'postcss-loader', // Run post css actions
					options: {
						plugins: function () {
							return [
								require('autoprefixer')
							];
						}
					}
				}, {
					loader: 'sass-loader'
				}]
			}
		]
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
	},
	externals: {
		"react": "React",
		"react-dom": "ReactDOM",
		"redux": "Redux",
		"react-redux": "ReactRedux"
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 8010,
		hot: true
	}
};