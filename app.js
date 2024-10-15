import express from 'express'
import { config } from './config/index.js'
import meteorsController from './delivery/meteorsController.js'
import roverController from './delivery/roverController.js'
import errorHandler from './middleware/errorHandler.js'
import nunjucks from 'nunjucks'

const app = express()

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
