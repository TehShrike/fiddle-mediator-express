const queryHandler = require('../helper/query-handler')

module.exports = ({ config, mediator }) => {
	const database = fakeRedis(config.redis)

	mediator.provide('redis:query', query => database.query(query).then(queryHandler))
}

function fakeRedis(credentials) {
	return {
		query() {
			return Promise.resolve('query results')
		}
	}
}
