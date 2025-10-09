document.getElementById("enviar_form").addEventListener("click", function(){
    armazenarForm();
    window.location.href = "crud1.html";
});

function armazenarForm(){
    var listaForm = JSON.parse(localStorage.getItem("listaForm"));
    if(!listaForm){
        var listaForm = [];
    }
    var form = {nome: "", opcao: "", nasc: "", horario: "", alternativa: "", checkboxes: ""};

    //campos simples
    form.nome = document.getElementById("campoTexto").value;
    form.opcao = document.getElementById("campoSelect").value;
    form.nasc = document.getElementById("campoData").value;
    form.horario = document.getElementById("campoHora").value;
    
    //campos com casos especiais
    const radioSelecionado = document.querySelector('input[name="flexRadioDefault"]:checked');
    if(radioSelecionado){
        form.alternativa = radioSelecionado.value;
    } else {
        form.alternativa = "Nenhuma alternativa selecionada";
    }

    //checkboxes
    //esse é mais chatinho, vejam com bastante paciencia e acompanhem o html para entender a lógica do .checked e .value
    const campos_selecionados = [];
    const todos_os_campos = document.querySelectorAll('input[name="interesses"]');
    todos_os_campos.forEach(function(checkbox){
        if(checkbox.checked){
            campos_selecionados.push(checkbox.value);
        }
    });
    form.checkboxes = campos_selecionados;

    //ATRIBUIÇÃO NA listaForm
    listaForm.push(form);
    
    localStorage.setItem("listaForm",JSON.stringify(listaForm));

}