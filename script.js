import { db } from "./firebase.js";
import { collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const endereco = document.getElementById("endereco").value;
    const telefone = document.getElementById("telefone").value;
    const status = document.getElementById("status").value;
    const tipo = document.getElementById("tipo").value;

    try {
        await addDoc(collection(db, "usuarios"), {
            nome: nome,
            email: email,
            endereco: endereco,
            telefone: telefone,
            status: status,
            tipo: tipo,
            data_cadastro: Timestamp.now(),
            ultimo_acesso: Timestamp.now()
        });

        alert("Cadastro realizado com sucesso!");
        formulario.reset();

    } catch (erro) {
        console.error("Erro ao cadastrar:", erro);
        alert("Erro ao realizar o cadastro.");
    }
});