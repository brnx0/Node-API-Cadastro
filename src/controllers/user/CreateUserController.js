
const CreateUserService = require('../../services/CreateUserService');

class CreateUserController{
    async handle(req, res){
        const { nome, email, telefone, senha } = req.body;
        const createUserService = new CreateUserService();

            if(!!nome & !!email & !!telefone & !!senha){

                const user = await createUserService.execute({
                    nome,
                    email,
                    telefone,
                    senha
                });
                return res.json({mensagem: user})
            }else{
                return res.json({mensagem: "Erro ao inserir dados"})
            }
    }

}
module.exports = CreateUserController