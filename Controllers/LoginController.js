const user_model = require('../Models/userSchema')
const bcrypt = require('bcrypt')

const Login_controller = (async (req, res, next) => {


    try {
        const Login_data = req.body
        const { mailid, password } = Login_data
        const userdata = await user_model.findOne({ mailid: mailid })

        if (userdata.mailid === mailid) {
            // const matchPassword = await bcrypt.compareSync(password.)
            if (bcrypt.compareSync(password, userdata.password)) {
                res.status(200).json({
                    Feedback: "Log-in Successfully",
                    success: true
                })
            } else {
                return res.status(500).json({
                    Feedback: 'Invalid username or password'
                })
            }
        }

    } catch (error) {
        res.status(404).json({
            Feedback: 'User does not exist',
            error
        })
    }


})


module.exports = { Login_controller }