import express, { Express } from 'express'
import cors from 'cors'

export class App {
  init: Express

  constructor () {
    this.init = express()
    this.config()
    // this.routes()
  }

  private config (): void {
    this.init.use(express.json())
    this.init.use(cors())
  }

  // private routes (): void {
  //   this.init.use('/paletas',route)
  // }
}
