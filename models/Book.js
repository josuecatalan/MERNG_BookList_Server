const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
	name: {
		type: String,
		unique: true,
		required: true
	},
	genre: {
		type: String,
		required: true
	},
	authorId: {
		type: String,
		required: true
	}
});

module.exports = model('Book', bookSchema);
