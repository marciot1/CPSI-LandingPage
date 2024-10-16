function salvarDados() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const saude = document.getElementById('saude').value;

    // Aqui você pode adicionar lógica para salvar os dados, como enviar para um servidor
    console.log('Dados salvos: ', { nome, cpf, telefone, saude });

    alert('Dados salvos com sucesso!');
}

function exportarParaExcel() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const saude = document.getElementById('saude').value;

    const data = [
        ["Nome", "CPF", "Telefone", "Saúde"],
        [nome, cpf, telefone, saude]
    ];

    let csvContent = "data:text/csv;charset=utf-8," 
        + data.map(e => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "inscricao.csv");
    document.body.appendChild(link); // Required for FF

    link.click();
}
