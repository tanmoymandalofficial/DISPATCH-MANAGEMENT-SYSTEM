const jwt = require("jsonwebtoken");


const authMiddleware = (req, res, next) => {
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
        req.userInfo = decoded;
        console.log(decoded);
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ success: false, message: "Invalid token" });
    }


    
}

module.exports = authMiddleware;