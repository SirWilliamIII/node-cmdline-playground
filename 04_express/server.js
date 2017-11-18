const express = require('express')
const url = require('url');
const querystring = require('querystring');


const app = express()
const port = process.env.PORT || 3000


app.get('/', (req, res) => {
	res.send(`
		<html>
			<body>
				<h1>This sucks...need a template</h1>
			</body>
		</html>
	`)
})

app.get('/api/user', (req, res) => {
	res.send([{
		firstname: 'Francis',
		lastname:  'Bacon'
	}, {
		firstname: 'Peter',
		lastname:  'Jacobson'
	}])
})

app.get('/api/car?name=will&age=30', (req, res) => {
	let rawUrl = 'localhost:3000/api/car';

	let parsedUrl = url.parse(rawUrl);
	let parsedQs = querystring.parse(parsedUrl.query);
})



app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
