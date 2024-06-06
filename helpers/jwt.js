const jwt = require('jsonwebtoken');
const dotEnv = require('dotenv');
const db = require("../helpers/db");
const Role = require("../helpers/role");

dotEnv.config();

const verifyToken = (requiredRole = 'Admin') => (req, res, next) => {
    const token = req.headers["Authorization"] || req.headers["authorization"];

    if (!token) return sendError("Error: No Token"); // Token does not exist
    if (token.indexOf("Bearer") !== 0) return sendError("Error: Token format invalid"); // Wrong format

    const tokenString = token.split(" ")[1];

    if (!tokenString) {
        return res.status(401).json({ message: 'No token provided' });
    }    

    jwt.verify(tokenString, process.env.secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.user = decoded;

        if (decoded.role !== requiredRole) {
            return res.status(403).json({
                message: 'You do not have the authorization and permissions to access this resource.'
            });
        }

        next();
    });
};

module.exports = verifyToken;