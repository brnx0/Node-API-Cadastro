# Escribo2
É necessario a utilização do POSTGRES como BD. o código para conexao fica no arquivo .ENV, Basta alterar de acordo com o banco de dados criado.</br>
Após isso é necessario rodar o comando 'prisma migrate dev' para criar uma tabela no banco. </br> 

O arquivo index.js é o ponto de partida para inciar a aplicação, basta executar ele e todo o resto estara disponivel. </br> 
o servidor escuta a porta 3000 </br>
Instancia na AWS: http://54.233.139.72/
Cadastro </br>
Acesse a rota GET '/user' passando valores nas chaves:  nome, email, telefone, senha. Para criar um novo usuario </br>

Login </br>
Acesse a rota GET '/user/login' passando no body  os valores de:  email, senha. Apos logar o JWT ira gerar um token, copie o valor do token para utilizar. </br>

Listar Usuarios 
Acesse a rota POST '/user/list' passando o token pela autenticação Bearer. O token garante que o usuario está logado e possui acesso. 
