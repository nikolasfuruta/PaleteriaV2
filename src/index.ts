import { app } from './app/express-app'

app.listen(3000, () => {
  console.log(`Server running at port ${3000}`)
})
