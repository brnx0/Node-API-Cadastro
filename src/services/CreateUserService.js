const prismaClient = require ('../prisma/prismaClient')
const  {hash}  = require('bcryptjs')

class CreateUserService{
    async execute({nome, email, telefone, senha}){
        const verificarEmail = await prismaClient.user.findFirst({ // Verificar se o Email já tá cadastrado no BD
            where:{
                email: email
            }
        })
        if(verificarEmail){  //Se o email tiver cadastrado ele retorna com a informação e não faz um novo INSERT
            return "Email já cadastrado";
        }
         const senhaHash = await hash(senha,8)
            try {
            const user = await prismaClient.user.create({
                data:{
                    nome: nome,
                    email: email,
                    telefone: telefone,
                    senha: senhaHash,
                },
                select:{
                    id:true,
                    data_criacao: true,
                    data_atualizacao: true, 
                    ultimo_login: true,
                }
            });
            return user;
         }catch{
             throw new Error("Erro ao cadastrar Usuario: "+ error.mensage);
         }  
    }
}
module.exports = CreateUserService
