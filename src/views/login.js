import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import backgroundImage from '../image/fundo.jpeg'




class Login extends React.Component{
   constructor (props){
       super(props)
       this.state= {
           usuario:"", 
           password:"",
           valid:false 
       }
   }

    onChangeUsuario = (e)=>{
        this.setState ({usuario:e.target.value})
        this.buttomvalid()
        this.forceUpdate()
    }
    onChangePassword= (e)=>{
        this.setState ({password:e.target.value})
        this.buttomvalid()
        this.forceUpdate()
    } 
    buttomvalid= ()=>{
        let p=this.state.password.length > 0
        let u=this.state.usuario.length > 0 
        let c=p&&u
        console.log(p,u,c)
        this.setState({valid:c})
        this.forceUpdate() 
    }
    render (){
        return (
            <div style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className= "container">
                <div className ="row"> 
                <div className ="col-md-6" style= {{position:'relative',left:'300px',paddingTop:'120px',height: '100vh'}}>
                        <div className= "bs-docs-section">
                            <Card title="Login">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="bs-component">
                                            <fieldset>
                                                 <FormGroup label= "Usuário:  *" htmlFor="exampleInputUsuario">      
                                                 <input type="Usuario" className="form-control" id="exampleInputUsuario" 
                                                 aria-describedby="UsuarioHelp" placeholder="Digite o usuario" required 
                                                 onChange={this.onChangeUsuario}/>
                                                 </FormGroup>
                                                 <FormGroup label= "Senha:  *" htmlFor="exampleInputPassword1">
                                                 <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required
                                                 onChange={this.onChangePassword}/>

                                                 <input type="text" value={this.state.valid}
                                                 />
                                                 </FormGroup>
                                                 
                                                    <br>
                                                    </br>
                                                 <button disabled={!this.valid} className="btn btn-success">Entrar</button>

                                                                    
                                            </fieldset>
                                        </div>
                                    </div>

                                </div>
                            </Card>
                           

                            
                    </div>
                </div>
            </div>
        </div>
        </div>
        )
    }

}

export default Login
