const User = require('../models/usersModel')
const { getDb } = require('../config/db')
const bcrypt = require('bcryptjs')


exports.userRegister = async (req, res) => {
    try {
        console.log("first")
        const { firstName, lastName, email, password } = req.body;
        console.log("hdjdv", firstName)
        const validation = User.validate({ firstName, lastName, email, password });
        console.log("validation", validation)
        if (validation.error) {
            res.status(400).json(validation.error)
            console.log("error")

        } else {
            const db = await getDb()
            const hashedPassword = await bcrypt.hash(password, 10)
            const collection = await db.collection('users')
            const response = await collection.insertOne({ firstName, lastName, email, password: hashedPassword })

            if (response) {
                res.status(200).json("User inserted  successfully")
            } else {
                res.error(404).json("User not inserted successfully")
            }
        }

    } catch (error) {
        console.log("internal server error")
        res.status(500).json("invalid")
    }

}