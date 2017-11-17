const commandLineArgs = require('command-line-args')

const optionsOption = [
	{ name: 'name', type: String },
	{ name: 'order', type: String },
	{ name: 'payment', type: Number }
]

const options = commandLineArgs(optionsOption)

if(options.name) {

	console.log(`Hello, ${options.name}, we are serving cake, pizza, and salad`)

} else if(options.order) {

	console.log(`Ok, that costs $25. You must pay with`)

} else if(options.payment) {

	console.log(`Your change is nada, now leave.`)

} else if(options.exit) {

	console.log('Get the fuck out!')

} else {

	console.log(`Hello please enter your name`)

}
