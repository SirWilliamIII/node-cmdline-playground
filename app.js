const fs = require('fs')
const commandLineArgs = require('command-line-args')

const optionsOption = [
	{ name: 'name', type: String },
	{ name: 'order', type: String },
	{ name: 'payment', type: Number },
	{ name: 'exit', type: Boolean}
]

const options = commandLineArgs(optionsOption)

let getJson = fs.readFileSync('db.json')
let objData = JSON.parse(getJson)

const save = newData => {
	const toString = JSON.stringify(newData)
	fs.writeFileSync('db.json', toString)
}


if(options.name) {
	objData.name = options.name

	console.log(`Hello, ${options.name}, we are serving cake, pizza, and salad`)

	save(objData)

} else if(options.order) {

	objData.order = options.order

	console.log(`Ok, that costs $25. You must pay with`)

	save(objData)

} else if(options.payment) {

	objData.payment = options.payment

	console.log(`Your change is ${options.payment - 25} dollars, now leave.`)

	save(objData)

} else if(options.exit) {

	console.log(objData)

	console.log('Leave!!')

	objData.name = ''
	objData.order = ''
	objData.payment = ''

	save(objData)

} else {

	console.log(`Hello please enter your name`)

}
