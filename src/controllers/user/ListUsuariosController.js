const ListUsuariosService = require ('../../services/ListUsuariosService')

class ListUserControler{
    async handle(req, res){
        const listUsuariosService = new ListUsuariosService();
        const usuarios = await listUsuariosService.execute();
        return res.json({Usuarios:usuarios})
    }
}
module.exports = ListUserControler