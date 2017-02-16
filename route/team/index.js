const express = require('express')
const handleError = require('../../helper/error-handler')

const createAuthenticationMiddleware = require('../../helper/authentication-middleware')

const listTeamsHelper = require('../../helper/team/list')
const getTeamHelper = require('../../helper/team/get')
const createTeamHelper = require('../../helper/team/create')
const updateTeamHelper = require('../../helper/team/update')

module.exports = (mediator) => {
	const router = express.Router()
	const authenticationMiddleware = createAuthenticationMiddleware(mediator)

	const listTeams = listTeamsHelper(mediator)
	const getTeam = getTeamHelper(mediator)
	const createTeam = createTeamHelper(mediator)
	const updateTeam = updateTeamHelper(mediator)

	router.get('/', (req, res) => {
		listTeams()
			.then(teams => res.render('team/list', teams))
			.catch(handleError(req, res))
	})

	router.post('/', authenticationMiddleware, (req, res) => {
		createTeam(req.body)
			.then(team => res.render('team/single', team))
			.catch(handleError(req, res))
	})

	router.get('/:teamId', (req, res) => {
		getTeam(req.params.teamId)
			.then(team => res.render('team/single', team))
			.catch(handleError(req, res))
	})

	router.post('/:teamId', authenticationMiddleware, (req, res) => {
		updateTeam(req.params.teamId, req.body)
			.then(team => res.render('team/single', team))
			.catch(handleError(req, res))
	})

	return router
}
