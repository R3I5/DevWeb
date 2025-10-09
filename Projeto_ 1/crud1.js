document.getElementById("novo_crud1").addEventListener("click", function(){
    window.location.href = "registro_crud1.html";
});

function carregarForms(){
    const listaForm = JSON.parse(localStorage.getItem("listaForm")) || [];
    const container = document.getElementById("lista_de_forms");

    //caso não exista form dentro da listaForm
    if(listaForm.length === 0){
        container.innerHTML = "<p>Nada para exibir, clique no botão para criar um novo!</p>"
        return;
    }

    let html = "";
    for(let i = 0; i < listaForm.length; i++){
        const form = listaForm[i];

        html += `
            <div class="form-card">
                <h2>Formulário ${i + 1}</h2>
                <hr>
                
                <div class="form-field">
                    <p id="display_nome_${i}"><strong>Nome:</strong> ${form.nome}</p>
                    <button onclick="mostrarEdicaoForm(${i}, 'nome')">Editar</button>
                    <input type="text" id="input_nome_${i}" value="${form.nome}" hidden>
                    <button id="ok_nome_${i}" onclick="editarForm(${i}, 'nome')" hidden>Ok</button>
                </div>

                <div class="form-field">
                    <p id="display_opcao_${i}"><strong>Opção:</strong> ${form.opcao}</p>
                    <button onclick="mostrarEdicaoForm(${i}, 'opcao')">Editar</button>
                    <select id="input_opcao_${i}" hidden>
                        <option value="1" ${form.opcao === '1' ? 'selected' : ''}>Opção 1</option>
                        <option value="2" ${form.opcao === '2' ? 'selected' : ''}>Opção 2</option>
                        <option value="3" ${form.opcao === '3' ? 'selected' : ''}>Opção 3</option>
                    </select>
                    <button id="ok_opcao_${i}" onclick="editarForm(${i}, 'opcao')" hidden>Ok</button>
                </div>

                <div class="form-field">
                    <p id="display_nasc_${i}"><strong>Nascimento:</strong> ${form.nasc}</p>
                    <button onclick="mostrarEdicaoForm(${i}, 'nasc')">Editar</button>
                    <input type="date" id="input_nasc_${i}" value="${form.nasc}" hidden>
                    <button id="ok_nasc_${i}" onclick="editarForm(${i}, 'nasc')" hidden>Ok</button>
                </div>

                <div class="form-field">
                    <p id="display_horario_${i}"><strong>Horário:</strong> ${form.horario}</p>
                    <button onclick="mostrarEdicaoForm(${i}, 'horario')">Editar</button>
                    <input type="time" id="input_horario_${i}" value="${form.horario}" hidden>
                    <button id="ok_horario_${i}" onclick="editarForm(${i}, 'horario')" hidden>Ok</button>
                </div>

                <div class="form-field">
                    <p id="display_alternativa_${i}"><strong>Alternativa:</strong> ${form.alternativa}</p>
                    <button onclick="mostrarEdicaoForm(${i}, 'alternativa')">Editar</button>
                    <div id="input_alternativa_${i}" hidden>
                        <input type="radio" name="edit-radio-${i}" value="alternativa A" ${form.alternativa === 'alternativa A' ? 'checked' : ''}> Alternativa A
                        <input type="radio" name="edit-radio-${i}" value="alternativa B" ${form.alternativa === 'alternativa B' ? 'checked' : ''}> Alternativa B
                    </div>
                    <button id="ok_alternativa_${i}" onclick="editarForm(${i}, 'alternativa')" hidden>Ok</button>
                </div>

                <div class="form-field">
                    <p id="display_checkboxes_${i}"><strong>Checkboxes:</strong> ${form.checkboxes.join(', ')}</p>
                    <button onclick="mostrarEdicaoForm(${i}, 'checkboxes')">Editar</button>
                    <div id="input_checkboxes_${i}" hidden>
                        <input type="checkbox" class="edit-checkboxes-${i}" value="Termos de uso aceitos" ${form.checkboxes.includes('Termos de uso aceitos') ? 'checked' : ''}> Aceito os termos<br>
                        <input type="checkbox" class="edit-checkboxes-${i}" value="Newsletter aceita" ${form.checkboxes.includes('Newsletter aceita') ? 'checked' : ''}> Desejo receber a newsletter
                    </div>
                    <button id="ok_checkboxes_${i}" onclick="editarForm(${i}, 'checkboxes')" hidden>Ok</button>
                </div>

                <hr>
                <div class="form-botoes">
                    <button onclick="excluirForm(${i})">Excluir Formulário Inteiro</button>
                </div>
            </div>
        `;
    };
    document.getElementById("lista_de_forms").innerHTML = html;
}

function excluirForm(id){
    var listaForm = JSON.parse(localStorage.getItem("listaForm"));
    listaForm.splice(id, 1);
    localStorage.setItem("listaForm",JSON.stringify(listaForm));
    window.location.reload();
}

function mostrarEdicaoForm(id, campo) {
    document.getElementById(`display_${campo}_${id}`).hidden = true;
    document.getElementById(`input_${campo}_${id}`).hidden = false;
    document.getElementById(`ok_${campo}_${id}`).hidden = false;
}

function editarForm(id, campo) {
    const listaForm = JSON.parse(localStorage.getItem("listaForm")) || [];
    let novaInfo;

    switch (campo) {
        case 'alternativa': //para radios
            const radioSelecionado = document.querySelector(`input[name="edit-radio-${id}"]:checked`);
            novaInfo = radioSelecionado ? radioSelecionado.value : "Nenhuma";
            break;
        
        case 'checkboxes': //para checkbox
            const checkboxesSelecionados = [];
            document.querySelectorAll(`.edit-checkboxes-${id}:checked`).forEach(checkbox => {
                checkboxesSelecionados.push(checkbox.value);
            });
            novaInfo = checkboxesSelecionados;
            break;

        default: //para o resto
            novaInfo = document.getElementById(`input_${campo}_${id}`).value;
            break;
    }

    listaForm[id][campo] = novaInfo;

    localStorage.setItem("listaForm", JSON.stringify(listaForm));

    carregarForms();
}

//precisa chamar a função em algum ponto do código, senão ela não funciona
carregarForms();