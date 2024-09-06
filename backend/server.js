import axios from 'axios'
import express from 'express'
import cors from 'cors'

const app = express()
const port = 500

app.use(cors())
app.use(express.json())

const api_key = '1b8320e7f079339b724b9a69c95ae273'
