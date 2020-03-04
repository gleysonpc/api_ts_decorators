import app from './App'
import './database/connection'

function main() {
    app.listen(process.env.PORT || 3333)
}

main()