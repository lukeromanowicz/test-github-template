const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('CT integration is closed source. Please, copy the code to your repository manually.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
