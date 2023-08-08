import express from 'express'
import { router } from './routes'
import swaggerUI from 'swagger-ui-express'
import swaggerFile from './swagger.json'

const app = express()

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile))
app.use(express.json())
app.use(router)

// eslint-disable-next-line no-console
app.listen(3333, () => { console.log('Server is running') })
