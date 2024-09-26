const user_model = require("../Models/userSchema")
const bcrypt = require('bcrypt'); // this is not working while deploying
const saltRounds = 10;


// Creating a new user
const Signin_controller = async (req, res, next) => {

    try {
        const user_info = req.body
        const { mailid } = user_info
        const user_exist = await user_model.findOne({ mailid })
        if (user_exist) {
            return res.status(200).json({
                Feedback: 'User already exist'
            })
        } else {
            user_info.password = bcrypt.hashSync(user_info.password, saltRounds) //Password hashing done here
            const create_user = await user_model.create(user_info)
            return res.status(200).json({
                Feedback: "user created successfully",
                isSignin: true,
                create_user
            })
        }

    } catch (error) {
        return res.status(404).json({
            Feedback: "Something went wrong",
            error
        })
    }





}


module.exports = { Signin_controller }