const express = require('express')
const teamRoute = require('./team')

module.exports = (mediator) => {
	const router = express.Router()

	router.use('/team', teamRoute(mediator))
	// and so on for the other routes

	return router
}
