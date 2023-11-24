const LoginUserService = require('../../services/LoginUserService');

class LoginUserController{
    async handle(req, res){
        const loginUserService = new LoginUserService();
        const {email, senha} = req.body;
        
        const login = await loginUserService.execute({
            email,
            senha

        })
        return res.json({mensagem: login})

    }
}
module.exports = LoginUserController;