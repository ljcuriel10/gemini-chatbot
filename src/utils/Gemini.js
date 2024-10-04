require('dotenv').config()
const key = process.env.GEMINI_KEY
const { GoogleGenerativeAI } = require('@google/generative-ai')
const genAI = new GoogleGenerativeAI(key)


const run = async () => {
    const model =  genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
    const prompt = 'Write a story about a magic backpack.'
    const result = await model.generateContent(prompt)
    console.log(result.response.text());
};


// run();