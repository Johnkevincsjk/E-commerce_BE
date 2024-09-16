
const user_model = require('../Models/userSchema')

const BuyDeatailsController = (async (req, res, next) => {


    try {
        const { mailid, receiverName, address, state, pincode } = req.body

        const update_user = await user_model.findOne({ mailid: mailid })

        update_user.buy_details = {
            receiverName,
            address,
            state,
            pincode
        }
        await update_user.save()
        return res.status(200).json({
            Feedback: "Address data updated successfully",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            Feedback: "Something went wrong",
            error
        })
    }



})



module.exports = { BuyDeatailsController }