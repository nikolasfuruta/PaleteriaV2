import { App } from './app/express-app'

const app = new App().init

app.listen(3000, () => {
  console.log(`Server running at port ${3000}`)
})
