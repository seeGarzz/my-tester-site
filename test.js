const validator = require('validator')
const tripleMe = require('./tripleMe')
const fs = require('fs')


console.log(tripleMe(10))

fs.readFile('./content.txt', 'utf-8', function(err, data) {
  if (err) throw err
  console.log(data)

  fs.writeFile('./index.html', `<h1>${data}</h1>`, function(err) {
    if (err) throw err
    console.log("The file was saved....")
  })
})

console.log(`Is this a valid email? = ${validator.isEmail('John@john.com')}`)