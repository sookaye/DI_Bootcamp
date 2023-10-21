const createProduct = (req, res) => {
    const newProduct = {
        id: Math.floor(Math.random() * 101) + 1,
        name: req.body.name,
        price: req.body.price
    }
    
    res.status(201).json(newProduct);
}

const getAllProducts = (req, res) => {
    res.status(200).json(products);
};

const getProductById = (req, res) => {
    const productId = parseInt(req.params.id);

    const product = products.find((p) => p.id === productId);

    if (!product) {
        return res.status(404).json({ error: 'Product not found.' });
    }

    res.status(200).json(product);
};


const updateProduct = (req, res) => {
    const productId = parseInt(req.params.id);
    const { name, price } = req.body;

    const productIndex = products.findIndex((p) => p.id === productId);

    if (productIndex === -1) {
        return res.status(404).json({ error: 'Product not found.' });
    }

    if (!name || !price) {
        return res.status(400).json({ error: 'Both name and price are required.' });
    }

    products[productIndex] = {
        ...products[productIndex],
        name,
        price: parseFloat(price),
    };

    res.status(200).json(products[productIndex]);
};

const deleteProduct = (req, res) => {
    const productId = parseInt(req.params.id);

    const productIndex = products.findIndex((p) => p.id === productId);

    if (productIndex === -1) {
        return res.status(404).json({ error: 'Product not found.' });
    }

    const deletedProduct = products.splice(productIndex, 1)[0];

    res.status(200).json(deletedProduct);
};


module.exports = {
     createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};


