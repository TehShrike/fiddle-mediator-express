module.exports = mediator => (req, res, next) => {
	mediator.call('isAuthenticated', req.get('auth-token-header')).then(authenticated => {
		if (authenticated) {
			next()
		} else {
			next(new Error('Not authenticated'))
		}
	})
}
