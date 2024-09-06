import axios from 'axios'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();

const app = express()
const port = 5001

app.use(cors())
app.use(express.json())

const api_key = process.env.WEATHER_API_KEY;

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