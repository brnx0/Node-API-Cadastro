const prismaClient = require("../prisma/prismaClient")
const { compare } = require ('bcryptjs')
const sign = require('jsonwebtoken')


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
        const token = sign(
            {
                email: login.email,
                senha: compararSenha
            },
            process.env.JWT_SECRET,{
                subjetc: login.id,
                expiresIn: '20d'
            }
        )
        

        return {
            id: login.id,
            data_criacao: login.data_criacao,
            data_atualizacao: login.data_atualizacao,
            ultimo_login: login.ultimo_login 
            
        }


    }

}
module.exports = LoginUserService