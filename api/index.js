import express from 'express'
const app = express();



app.listen(8080, (err) => {
    if (err) throw err;
    console.log("Server running on port : 8080")
})