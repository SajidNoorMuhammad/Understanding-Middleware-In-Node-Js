import express from "express"

const tasks = [
    {
        id: 1,
        task: "Drink Water"
    },
    {
        id: 2,
        task: "Complete Work"
    },
    {
        id: 3,
        task: "Playing Games"
    }
]

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.status(200).send(tasks);
})

app.post('/', (req, res) => {
    res.send('Post Request Called')
})

app.put('/', (req, res) => {
    res.send('Put Request Called')
})

app.delete('/', (req, res) => {
    res.send('Delete Request Called')
})

app.listen(PORT, () => {
    console.log("Server is running on port" + PORT)
})