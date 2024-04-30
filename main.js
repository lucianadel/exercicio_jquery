$(document).ready(function () {

    $("#form-tarefa").submit(function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        var nomeTarefa = $("#nome-tarefa").val();

        if (nomeTarefa) {
            adicionarTarefa(nomeTarefa);
            $("#nome-tarefa").val(""); // Limpa o campo de entrada
        }
    });

    $("#lista-tarefas").on("click", "li", function () {
        $(this).toggleClass("feito");
    });
});

function adicionarTarefa(nomeTarefa) {
    var li = $("<li>").text(nomeTarefa);
    $("#lista-tarefas").append(li);
}
function salvarTarefas() {
    var tarefas = $("#lista-tarefas li").map(function() {
        return $(this).text();
    }).toArray();
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function carregarTarefas() {
    var tarefas = JSON.parse(localStorage.getItem("tarefas"));
    if (tarefas) {
        tarefas.forEach(function (tarefa) {
            adicionarTarefa(tarefa, false); // Carrega sem marcar como feito
        });
    }
}

