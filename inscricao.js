// script.js
let registros = [];

function salvarDados() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const saude = document.getElementById('saude').value;

    const registro = { nome, cpf, email, telefone, saude };
    registros.push(registro);

    console.log('Registro salvo:', registro);
    alert('Dados salvos com sucesso!');
}

function exportarParaExcel() {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Nome,CPF,E-mail,Telefone,Saúde\n";

    registros.forEach(registro => {
        const row = `${registro.nome},${registro.cpf},${registro.email},${registro.telefone},${registro.saude}\n`;
        csvContent += row;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "registros.csv");
    document.body.appendChild(link);
    link.click();
}
