const checklistRouter = require('./src/routes/checklist')

const express = require('express')

const app = express();

app.use(express.json())

app.use('/checklists',checklistRouter)

app.listen(3000, () => {
    console.log('Servidor Online...')
})