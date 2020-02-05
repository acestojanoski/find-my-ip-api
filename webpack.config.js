const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: './src/index.js',
	target: 'node',
	mode: 'production',
	externals: [nodeExternals()],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'find-my-ip.bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-transform-runtime'],
					},
				},
			},
		],
	},
};
