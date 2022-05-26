import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../constext/LoginContext";


function LogarConta() {
    const { login, setLogin, senha, setSenha, recebeLogin, token } = useContext(Context)

    var navigate = useNavigate()

    function prevent(event) {
        event.preventDefault()

        if (token)
            navigate('/Ok')
        else
            alert('Usuário ou senha incorretos')
    }

    return (
        <div>
            <div>Tela de login</div>
            <form onSubmit={prevent}>
                <input type='text' placeholder="Digite seu Login" value={login} onChange={(e) => setLogin(e.target.value)}></input>
                <input type='password' placeholder="Digite sua Senha" value={senha} onChange={(e) => setSenha(e.target.value)}></input>
                <button type="submit" onClick={recebeLogin}>Acessar</button>

            </form>
        </div>

    )

}

export default LogarConta