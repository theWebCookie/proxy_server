import express, { Application } from 'express'
import { config } from './config/index.ts'
import meteorsController from './delivery/meteorsController.ts'
import roverController from './delivery/roverController.ts'
import errorHandler from './middleware/errorHandler.ts'
import nunjucks from 'nunjucks'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(meteorsController)
app.use(roverController)

app.use(errorHandler)

nunjucks.configure('views', {
  autoescape: true,
  express: app
})

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`)
})
