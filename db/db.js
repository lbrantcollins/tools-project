const mongoose = require('mongoose');

connectionString = 'mongodb://localhost/bittools';

mongoose.connect(connectionString, { 
	useNewUrlParser: true,
	useCreateIndex: true
	});


mongoose.connection.on('connected', () => {
  console.log(`mongoose connected to ${connectionString}`)
})

mongoose.connection.on('disconnected', () => {
  console.log(`mongoose disconnected to ${connectionString}`)
})

mongoose.connection.on('error', (err) => {
  console.log(`mongoose error: ${err}`)
})