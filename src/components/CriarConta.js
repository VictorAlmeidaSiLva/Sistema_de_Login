import React from "react";
import api from "../api";

function CriarConta() {
    api.post('usuarios', {
        login: '',
        senha: ''
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    return (
        <div>
            ok
        </div>
    )
}

export default CriarConta