const fs = require('fs')

data = fs.readFile('./file.txt', 'utf8', (err, data) => {
	if(err) throw err

	console.log(data)
})

function showMessage() {
	console.log('done!')
}

showMessage()
