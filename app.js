const express = require("express")
const app = express()

app.use(express.json())

require('dotenv').config()

const port = process.env.PORT || 3000

const env = process.env.ENV || "prod"

const tasks = []

app.post('/tasks', (req, res) => {
    const { task } = req.body

    if (task){
        tasks.push(task)
        res.status(201).json({
            message: "Task added successfully"
        })
    } else {
        throw new Error("Fill all the fields")
    }

})

if (env !== 'test'){
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    })
}

module.exports = app