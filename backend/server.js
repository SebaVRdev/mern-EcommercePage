//Configuramos Servidor
import express from 'express';
import { data } from './data.js';

const app = express();

//Test
app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.get('/api/products/slug/:slug', (req, res) => {
    const product = data.products.find(pr => pr.slug === req.params.slug)
    if (product) {
        res.send(product);
        console.log(product);
    }
    else{
        res.status(404).send({message: 'Product not found'});
    };
});

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find(pr => pr._id === req.params.id)
    if (product) {
        res.send(product);
        console.log(product);
    }
    else{
        res.status(404).send({message: 'Product not found'});
    };
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Serve at http://localhost:${PORT}`);
});