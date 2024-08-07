import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, { expiresIn: '3h' })

    return res.cookie("jwt",token,{
        httpOnly: true,
        //sameSite: "strict",
        // secure: process.env.NODE_ENV !== "development"
    })
}

export default generateTokenAndSetCookie;