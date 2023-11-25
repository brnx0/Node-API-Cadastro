const prismaClient = require("../prisma/prismaClient")
const { compare } = require ('bcryptjs')
const {sign} = require('jsonwebtoken')
const {req,res} = require('express')


class LoginUserService{
    async execute({email, senha}){
        try{
            const login = await prismaClient.user.findFirst({
                where:{
                    email: email
                }
            })
            const compararSenha = await compare(senha, login.senha)
            if(login.senha){
               
                if(!compararSenha){
                    return new Error('401')
                }
            }
            
            const x = prismaClient.user.update({
                where:{
                    id: 'login.id',
                },
               
                data:{
                    ultimo_login: 'new Date()',
                    nome: "Berry2"
                },
            })
            console.log(x)
            const token = sign(
                {
                    email: login.email,
                },
                process.env.JWT_SECRET,
                { 
                    expiresIn: 3000
                }
            )

            console.log(Date())
            return {
                id: login.id,
                data_criacao: login.data_criacao,
                data_atualizacao: login.data_atualizacao,
                ultimo_login: login.ultimo_login,
                token: token
            }

        }catch{
           return "Usuário e/ou senha inválidos"
        }  
    }
}
module.exports = LoginUserService