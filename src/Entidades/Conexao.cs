namespace ProjetoLogin.DAL{
    public class Conexao{
        SqlConnection con = new SqlConnection();
        public Conexao(){
            con.ConnectionString = @"Server=HIGORDLC\\SQLEXPRESS; Database=logins;Integrated Security=True";
        }
            public SqlConnection Conectar(){
                if(con.State == System.Data.ConnectionState.Closed){
                    con.Open();
                }
                return con;
            }
        public void desconectar(){
            if(con.State == System.Data.ConnectionState.Open){
                    con.Closed();
                }
                return con;
        }
    }
}