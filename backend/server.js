import axios from 'axios'
import express from 'express'
import cors from 'cors'

const app = express()
const port = 5001

app.use(cors())
app.use(express.json())

const api_key = '1b8320e7f079339b724b9a69c95ae273'

app.get('/weather', async(req, res) => {
    const {location} = req.query

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api_key}`
        const response = await axios.get(url)
        res.json(response.data)
    } catch (error) {
        res.status (500).json({ error: 'Failed to fetch weather data' })
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});