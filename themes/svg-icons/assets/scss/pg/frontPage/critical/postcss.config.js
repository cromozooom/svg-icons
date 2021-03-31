const purgecss = require('@fullhuman/postcss-purgecss')
const autoprefixer = require('autoprefixer')

module.exports = {
	plugins: [
		purgecss({
			content: [
				'themes/*/layouts/**/*.html',
				'themes/**/*.svg',
				'themes/**/*.js',
			]
		}),
		autoprefixer({
			Browserslist: [
				"last 2 versions",
				"Explorer >= 8",
			]
		})
	]
}