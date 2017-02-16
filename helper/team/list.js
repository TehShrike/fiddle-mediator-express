module.exports = mediator => () => {
	return mediator.call('mysql:query', generateQuery())
}

function generateQuery(teamId) {
	// using some better tool, of course
	return `SELECT * FROM team LIMIT 100000`
}
