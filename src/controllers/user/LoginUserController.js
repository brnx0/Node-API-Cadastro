const LoginUserService = require('../../services/LoginUserService');

class LoginUserController{
    async handle(req, res, next){
        const loginUserService = new LoginUserService();
        const {email, senha} = req.body;
        const login = await loginUserService.execute({
            email,
            senha
        })
        if(login=="Usuário e/ou senha inválidos"){
            return res.status(401).json({Error:login})
        }
        return res.json({mensagem: login})
    }
}
module.exports = LoginUserController;