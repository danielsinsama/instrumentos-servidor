const {config} = require('dotenv')

config()
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 5000
// export const MONGODB_URI = process.env.MONGODB_URI

module.exports = {
	MONGODB_URI,
	PORT
}