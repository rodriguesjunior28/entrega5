import React, { Component } from "react";
import Footer from '../layout/Footer';



class Cadastro extends Component {
    render() {
        return (
            <>
                <main className="container main">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center">Favor preencher os campos abaixo:</h1><br></br>
                            <form>

                                <div className="form-row">
                                    <div className="form-group col-md-3">
                                        <label for="inputEmail4">Usuário</label>
                                        <input type="email" className="form-control" id="inputUsuario" placeholder="Usuário" />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label for="inputPassword4">Senha</label>
                                        <input type="password" className="form-control" id="inputPassword4" placeholder="Senha" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="inputCEP">E-mail</label>
                                        <input type="text" className="form-control" id="inputEmail14" placeholder="E-mail" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="inputAddress">Endereço</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="Rua dos Bobos, nº 0" />
                                </div>
                                <div className="form-group">
                                    <label for="inputAddress2">Pessoa Fisica / Pessoa Juridica</label>
                                    <input type="text" className="form-control" id="inputPessoa" placeholder="Fisica / Juridica" />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="inputCity">Cidade</label>
                                        <input type="text" className="form-control" id="inputCity" placeholder="Cidade" />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label for="inputEstado">Estado</label>
                                        <select id="inputEstado" className="form-control">
                                            <option selected>Escolher...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label for="inputCEP">CEP</label>
                                        <input type="text" className="form-control" id="inputCEP" placeholder="40.000-000" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                                        <label className="form-check-label" for="gridCheck">
                                            Clique em mim
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Entrar</button>
                            </form>
                        </div>
                    </div>
                </main><br></br><br></br>
                <Footer />
            </>
        )
    }
}

export default Cadastro;





