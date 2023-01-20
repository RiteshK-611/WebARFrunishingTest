import Product from '../models/productSchema.js';


export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});

        response.json(products);
    }catch (error) {
        console.log('Error:', error.message);
    }
}
export const getProductById = async (request, response) => {
    try {
         const product = await Product.findOne({ 'id': request.params.id });
          response.json(product);
    } catch (error) {
        console.log('Error:', error.message);
    }
}

/* export const addNewProductToDb = async (request, response) => {
    const product = req.body;

    const newProduct = new Product({...product });

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
} */