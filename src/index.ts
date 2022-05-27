import { app } from './app/express-app'
import dotenv from 'dotenv'

dotenv.config()
app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`)
})
