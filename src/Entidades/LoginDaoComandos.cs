using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjetoLogin.DAL
{
    class LoginDaoComandos
    {
        public bool tem = false;
        SqlCommand command = new SqlCommand();
        Conexao con = new Conexao();
        SqlDataReader dr;

        public bool verificarLogin(String usuario, String senha){
            
            cmd.CommandText = "select * from logins where usuario = @usuario and senha = @senha";
            cmd.Parameters.AddWithValue("@usuario",usuario);
            cmd.Parameters.AddWithValue("@senha",senha);

            try
            {

                cmd.Connection = con.Conectar();
                dr = cmd.ExecuteReader();
                if(dr.HasRows){
                    tem = true;
                }
            }
            catch (SqlException)
            {
                
                throw;
            }
            return tem;
        }
    }
}