import express from "express"

const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('<div> Hello world </div>')
})

app.listen(port, () => {
    console.log("app is running")
})