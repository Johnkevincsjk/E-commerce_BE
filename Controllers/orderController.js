const order_model = require('../Models/orderSchema')



const order_controller = (req, res, next) => {

    // data has been create below 
    const cart = req.body
    const Total_amount = cart.reduce((acc, items) => acc + items.Product.price * items.Qty, 0).toFixed(2)
    const Status = 'Pending'



    // Create a order logics below
    order_model.create({ cart, Total_amount, Status }).then((response) => {
        res.status(200).json({
            Feedback: "orders placed successfully",
            Success: true,
            response
        })
    }).catch((err) => {
        res.status(500).json({
            Feedback: 'Something went wrong',
            err
        })
    })

}

module.exports = { order_controller }