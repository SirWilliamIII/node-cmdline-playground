function message() {
	console.log('message')
}

message()

setTimeout(() => {
	console.log('deferred')
}, 0)

console.log('another')
