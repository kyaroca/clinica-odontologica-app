namespace ProjetoLogin.Modelo{
    class Controle{
        public bool tem;
        public string mensagem ="";

        public bool acessar(string usuario, string senha){
            LoginDaoComandos loginDao = new LoginDaoComandos();
            tem = loginDao.verificarLogin(usuario, senha);
    
            return tem;
        }
    }
}
