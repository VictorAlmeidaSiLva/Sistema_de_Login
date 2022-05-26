import { createContext, useState } from "react";
import api from "../api"

export const Context = createContext()

function LoginContext({children}) {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [token, setToken] = useState()
    
    const recebeLogin = async () => {
        const req = await api.post('logar', {login: login, senha: senha})
        setToken(req.data.token)
    }

    return(
        <div>
            <Context.Provider value={{login, setLogin, senha, setSenha, recebeLogin, token}}>
                {children}
            </Context.Provider>
        </div>
    )
}

export default LoginContext