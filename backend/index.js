import express from 'express';
import cors from 'cors';


// EXPRESS
const app = express();
const PORT = 1982;
const greeting = 'Hello World! 👽';
app.use(cors());

/* ENDPOINTS */
app.get('/', (req, res, next) => {
    res.send(greeting);
});

/* APIs */
app.get('/greeting', (req, res, next) => {
    console.log(`getting the ${greeting}`);
    res.json({greeting});
});


app.listen(PORT, () => {
    console.log(`Node.js Server running at http://localhost:${PORT}`);
});