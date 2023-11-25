const { verify } = require('jsonwebtoken');

class Autenticado {
    async execute(req, res, next) {
        const autenticaToken =  req.headers.authorization
        if (!autenticaToken || !autenticaToken.startsWith('Bearer') ) {
            return res.status(401).json({ mensagem: "Token inválido" });
        }
         const [,token] = autenticaToken.split(' ');
        try {
            verify(token, process.env.JWT_SECRET);
            console.log("foi")
            return next();
        } catch (err) {  
            return res.status(401).json({ mensagem: "Token inváalido" });
        }
    }
}
module.exports = Autenticado;