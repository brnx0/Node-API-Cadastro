# Escribo2
Cadastro </br>
Acesse a rota GET '/user' passando valores nas chaves:  nome, email, telefone, senha. Para criar um novo usuario </br>]

Login </br>
Acesse a rota GET '/user/login' passando no body  os valores de:  email, senha. Apos logar o JWT ira gerar um token, copie o valor do token para utilizar. </br>

Listar Usuarios 
Acesse a rota POST '/user/list' passando o token pela autenticação Bearer. O token garante que o usuario está logado e possui acesso. 
