const test = require('tape')
const service = require('./create')
const mannish = require('mannish')

test('creating a team creates it in the database and returns the created team', t => {
	t.plan(2)
	const mediator = mannish()
	const team = {
		id: 'abc123',
		name: 'Fighting Ducks',
		record: {
			win: 12,
			loss: 3
		}
	}
	mediator.provide('mysql:query', query => {
		t.equal(query, 'INSERT stuff WHERE all that jazz')
	})

	service(mediator)(team)
		.then(result => {
			t.equal(result.something, 'The ducks won 12 times!')
			t.end()
		})
})

test('failing to provide certain properties results in a failure', t => {
	const mediator = mannish()
	const team = {
		name: 'Fighting Ducks'
	}
	mediator.provide('mysql:query', () => {
		t.fail('service should throw before querying')
	})
	service(mediator)(team)
		.catch(error => {
			t.equal(error.something, 'you have to provide an id')
			t.end()
		})
})
