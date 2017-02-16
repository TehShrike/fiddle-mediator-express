module.exports = ({ mediator }) => {
	mediator.provide('isAuthenticated', token => {
		return true // lol
	})
}
