const jwt = require("jsonwebtoken");
const User = require("../models/User");


const authMiddleware = async (req, res, next) => {
    let token = req.headers.authorization; //['authorization'];
    token = token && token.split(" ")[1];
    console.log(token);

    //cheak token if not exist
    if (!token) {
        return res.status(401).json({ success: false, message: "access denied! please login" });
    }

    //verify token
    try {
        let decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log(decoded);

        const { userId } = decoded;
        const user = await User.findOne({ _id: userId });
        if (!user.islogin) {
            return res.status(401).json({ success: false, message: "access denied! please login again" });
        }
        
        req.userInfo = decoded;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ success: false, message: "Invalid token" });
    }


    
}

module.exports = authMiddleware;