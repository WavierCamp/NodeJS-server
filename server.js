const https = require('https')  
const express = require('express')
const app = express()
const fetch = require('node-fetch')
const port = process.env.PORT || 3000
const axios = require('axios')

app.listen(port ,() => console.log(`Listening to ${port}`))


app.get('/menu', async(request, response)=> {
 const full_url = `${api_url}&appid=${api_key}`
 const fetch_rsp = await fetch(full_url)
 const json = await fetch_rsp.json()
 console.log(json)
});

const api_url = 'https://api.spoonacular.com/mealplanner/generate/';
const api_key = '4ba06c65001d4c25badad0d618ae9f97';
