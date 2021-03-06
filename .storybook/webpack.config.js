const path = require('path');

module.exports = {
	module: {
		rules: [{
			test: /\.scss$/,
			loaders: [
				require.resolve('style-loader'),
				{
					loader: require.resolve('css-loader'),
					options: {
						importLoaders: 1,
						modules: true,
						localIdentName: '[name]__[local]___[hash:base64:5]',
					},
				},
				{
					loader: require.resolve('sass-loader'),
					options: {
						includePaths: [path.join(__dirname, '../sass')]
					}
				}

			],
		}],
	},
};