const prismaClient = require("../prisma/prismaClient");

class ListUsuariosService{
    async execute(){
        const listUsuarios = await prismaClient.user.findMany({
            select:{
                id: true,
                nome: true
            }
        })
    return listUsuarios
    }
}
module.exports = ListUsuariosService