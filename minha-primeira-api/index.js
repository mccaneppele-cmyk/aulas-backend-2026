import express from 'express'

const app = express();

app.get("/livros", (req, res) => {
    res.send("Hello, world Matheus");
});

app.listen(300);



