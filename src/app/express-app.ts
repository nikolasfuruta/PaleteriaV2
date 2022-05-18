import express, { Express } from 'express'
import cors from 'cors'
import { router } from '../routes/paletas-route'
import connectDB from '../db/prisma-connect'

export class App {
  init: Express

  constructor () {
    this.init = express()
    void this.conn()
    this.config()
    this.routes()
  }

  private async conn (): Promise<void> {
    await connectDB()
  }

  private config (): void {
    this.init.use(express.json())
    this.init.use(cors())
  }

  private routes (): void {
    this.init.use(router)
  }
}

export const app = new App().init
