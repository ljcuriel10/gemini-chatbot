import 'dotenv/config'
const key = process.env.REACT_APP_GEMINI_KEY;
const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI(key);

const Gemini = {
    run: async (history, message) => {
        const model =  genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
        const chat = model.startChat({history})
        let result = await chat.sendMessage(message);
        return result.response.text();
    }
};


export default Gemini;