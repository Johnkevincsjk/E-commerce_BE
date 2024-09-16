
const product_data = require('../Models/productSchema')



// Get all products API below - /Kingswear/products
const get_all_products = async (req, res, next) => {

    try {
        const search_products = req.query.keyword ? {
            title: {
                $regex: req.query.keyword,
                $options: 'i'
            }
        } : {}
        await product_data.find(search_products).then((data) => {
            const no_of_pro = data.length
            return res.status(200).json({
                Feedback: "Products fetched successfully",
                no_of_pro,
                Success: true,
                data

            })
        })
    } catch (error) {
        return res.status(500).json({
            Feedback: 'Unable to fetch data from DB',
            error
        })
    }



}


// Get Single product api below - /Kingswear/product:id
const get_single_product = async (req, res, next) => {

    try {



        const one_data = await product_data.findById(req.params.id)
        return res.status(200).json({
            Feedback: 'Single product fetched successfully',
            one_data,
            Success: true
        })
    } catch (error) {
        return res.status(404).json({
            Feedback: 'Product not available',
            error
        })
    }

}

module.exports = { get_all_products, get_single_product }