import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
  return response.status(200).json({ message: 'Hello World' })
})
// eslint-disable-next-line no-console
app.listen(3333, () => { console.log('Server is running') })
