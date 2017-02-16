const express = require('express')
const mannish = require('mannish')
const glob = require('glob')

// const route = require('./route')

const config = {
	redis: {},
	database: {}
}

const mediator = mannish()

function slurp(pattern) {
	return glob.sync(pattern)
		.filter(file => !/\.spec\.js$/.test(file))
		.map(file => require(`./${file}`))
}

slurp('service/**/*.js')
	.forEach(service => {
		service({ config, mediator })
	})

const app = express()

app.use(require('./route/index')(mediator))

app.listen(3000)

console.log('Listening on port 3000')
