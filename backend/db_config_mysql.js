module.exports = {

	development: {
		client: 'mysql',
		connection: {
			host : process.env.DB_HOST,
			user : process.env.DB_USER,
			password : process.env.DB_PASS,
			database : process.env.DB_DATABASE
		},
		pool: { min: 2, max: 100 }
	}

}