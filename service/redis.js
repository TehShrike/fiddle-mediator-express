const redis = require('actual-redis')
const queryHandler = require('./helper/query-handler')

module.exports = ({ credentials, mediator }) => {
	const database = redis(credentials)

	mediator.provide('redis:query', query => database.query(query).then(queryHandler))
}
