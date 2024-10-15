import express, { Application } from 'express'
import { config } from './config/index'
import meteorsController from './delivery/meteorsController'
import roverController from './delivery/roverController'
import errorHandler from './middleware/errorHandler'
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
