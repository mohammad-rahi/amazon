import products from "./products.json";

export default function handler(req, res) {
    const { productId } = req.query;
    const product = products.find((product => product.id === parseInt(productId)));
    res.status(200).json(product)
}