import React from'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import SelectMenu from '../components/selectMenu'
import Footer from './Footer'
import Header from './Header'
import InputMask from "react-input-mask";


const a=()=>{
  
        window.location.href ="./CadastroPaciente";
}


  
class CadastroPaciente extends React.Component{
    
    state ={
        nome:'',
        telefone:'',
        celular:'',
        email:'',
        cep:'',
        endereco:'',
        complemento:'',
        datadenascimento:''
    }
    
    render(){
    
            
      const lista = [
          {label:'SELECIONE', value:''},
          {label:'MASCULINO', value:'Masculino'},
          {label:'FEMININO', value:'Feminino'}
      ]
     
        return (
            
            <div> 
                <Header></Header>
                
               <main className="container ">

              
            <Card title = "Cadastro de Paciente">
            <div class="row">
                <div class="col-lg-12">
                    <div class="bs-component">
                        <FormGroup label="Nome:   " htmlFor="inputNome">
                            <input type= "text" 
                            id="inputNome" 
                            className="form-control"
                            name="nome"
                            onChange={e=>this.setState({nome:e.target.value})}/>
                        </FormGroup>
                
                        <FormGroup label="Telefone:   " htmlFor="inputTelefone">
                            <InputMask
                            mask="(99) 99999-9999"
                            type= "text" 
                            id="inputTelefone" 
                            className="form-control"
                            name="telefone"
                            onChange={e=>this.setState({telefone:e.target.value})}/>
                        </FormGroup>
                       
                        
                        <FormGroup label="Celular:   " htmlFor="inputCelular">
                        <InputMask
                            mask="(99) 9 9999-9999"
                            type= "text" 
                            id="inputTelefone" 
                            className="form-control"
                            name="telefone"
                            onChange={e=>this.setState({telefone:e.target.value})}/>
                        </FormGroup>
                        
                        <FormGroup label="Email:   " htmlFor="inputEmail">
                            <input type= "email" 
                            id="inputEmail" 
                            className="form-control"
                            name="email"
                            onChange={e=>this.setState({email:e.target.value})}/>
                        </FormGroup>

                        <FormGroup label="CEP:   " htmlFor="inputCep">
                        <InputMask
                            mask="9999-999"
                            type= "text" 
                            id="inputTelefone" 
                            className="form-control"
                            name="telefone"
                            onChange={e=>this.setState({telefone:e.target.value})}/>
                        </FormGroup>

                        <FormGroup label="Endereço:   " htmlFor="inputEndereco">
                            <input type= "text" 
                            id="inputEndereco" 
                            className="form-control"
                            name="endereco"
                            onChange={e=>this.setState({endereco:e.target.value})}/>
                        </FormGroup>

                        <FormGroup label="Complemento:   " htmlFor="inputComplemento">
                            <input type= "text" 
                            id="inputComplemento" 
                            className="form-control"
                            name="complemento"
                            onChange={e=>this.setState({complemento:e.target.value})}/>
                        </FormGroup>

                        <FormGroup label="Data de Nascimento:   " htmlFor="inputdatanascimento">
                            <input type= "date" 
                            id="inputdatanascimento" 
                            className="form-control"
                            name="datanascimento"
                            onChange={e=>this.setState({datanascimento:e.target.value})}/>
                        </FormGroup>

                        <FormGroup htmlFor="inputSexo" label= "Sexo:  ">
                            <SelectMenu id="inputSexo" className="form-control"lista={lista}/>
                          
                        </FormGroup>
                        <br>
                        </br>
                        <br>
                        </br>
                        <br>
                        </br>
                      <button className="btn btn-danger">Cadastrar</button>
                      <button className="btn btn-primary">Consultar</button>
                      <button className="btn btn-warning" onClickCapture={(a)} >Apagar</button>
                   
                    </div>   
                </div> 
            </div>
        </Card>
        </main>
        
        <Footer></Footer>
    </div>

        )


    }


        }
        
export default CadastroPaciente;

