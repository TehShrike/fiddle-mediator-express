const queryHandler = require('./helper/query-handler')

module.exports = ({ config, mediator }) => {
	const database = mysql(config.database)

	mediator.provide('mysql:query', query => database.query(query).then(queryHandler))
	// there would probably be a handful of these for common functionality
}

function fauxMysql(credentials) {
	return {
		query() {
			return Promise.resolve('some results')
		}
	}
}
