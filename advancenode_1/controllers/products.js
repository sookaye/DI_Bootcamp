const createProduct = (req, res) => {
    const newProduct = {
        id: Math.floor(Math.random() * 101) + 1,
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json(newProduct);
}

const products = [];

const getProduct = (req, res) => {
    const productId = parseInt(req.params.id); 
    const product = products.find(product => product.id === productId);

    if (!product) {
        res.status(404).json({ message: "Pena produit"});
    } else {
        res.status(201).json(product);
    }
}

module.exports = {
    createProduct,
    getProduct,
};


