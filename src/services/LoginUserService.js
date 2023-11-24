const prismaClient = require("../prisma/prismaClient")
const { compare } = require ('bcryptjs')


class LoginUserService{

    async execute({email, senha}){
        const login = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })
        if(!email){
            return "Usuário e/ou senha inválidos"
        }
        if(login.senha){
            const compararSenha = await compare(senha, login.senha)
            if(!compararSenha){
                return new Error('401')
            }
        }
        
        

        return {
            id: login.id,
            data_criacao: login.data_criacao,
            data_atualizacao: login.data_atualizacao,
            ultimo_login: login.ultimo_login 
            
        }

    }

}
module.exports = LoginUserService