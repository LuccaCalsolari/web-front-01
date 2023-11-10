const buttonMedicamentos = document.querySelector("#medicamentos");
const remedios = document.querySelector(".remedios");

// variável validação
const campoNome = document.querySelector("#nome");
const campoCidade = document.querySelector("#cidade");
const buttonEnviar = document.querySelector("button");

//Criando uma tag p
const pMensagem = document.createElement("p");

function clearForm() {
    campoNome.value = '';
    campoCidade.value = '';
}

//função da validação
buttonEnviar.addEventListener("click", function(event) {
    event.preventDefault();
    if (campoNome.value == '') {
        // alert("Preencha o campo nome!");
        pMensagem.textContent = "Preencha o campo nome!";
        campoNome.insertAdjacentElement("afterend", pMensagem);
        pMensagem.setAttribute("class", "error");
        return false;
    }

    if (campoCidade.value == '') {
        // alert("Preencha o campo cidade");
        pMensagem.textContent = "Preencha o campo cidade!";
        campoCidade.insertAdjacentElement("afterend", pMensagem);
        pMensagem.setAttribute("class", "error");
        return false;
    }

    pMensagem.classList.add('d-none');
    
    clearForm();

});


// chamando medicamentos
buttonMedicamentos.addEventListener("click", function() {
    remedios.classList.toggle("d-block");
});

