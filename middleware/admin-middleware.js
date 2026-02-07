

const cheakAdmin = (req, res, next) => {
    const userInfo = req.userInfo;
    if (userInfo.role !== "admin") {
        return res.status(401).json({ success: false, message: "access denied! you are not admin" });
    }
    next();
}

module.exports = cheakAdmin;