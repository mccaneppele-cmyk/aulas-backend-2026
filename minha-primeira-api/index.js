import express from 'express'
const app = express();

app.use(express.json());

let livros = [{
    id: 1,
    nome: "Nome do autor",
    titulo: "Titulo do livro",
    disponivel: true
}];

app.patch("/livros/:id/emprestimo", (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).send("ID invalido");
    }

    const livroIndex = livros.findIndex((livro) => livro.id === id);

    if (livroIndex === -1) {
        return res.status(404).send("Livro nao encontrado");
    }

    livros[livroIndex].disponivel = false;

    console.log(livros);

    res.send("Livro emprestado");
});

app.patch("/livros/:id/devolucao", (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).send("ID invalido");
    }

    const livroIndex = livros.findIndex((livro) => livro.id === id);

    if (livroIndex === -1) {
        return res.status(404).send("Livro nao encontrado");
    }

    livros[livroIndex].disponivel = true;

    console.log(livros);

    res.send("Livro devolvido");
});

app.listen(3000);
