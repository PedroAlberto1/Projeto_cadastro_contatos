document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // Cria uma nova linha na tabela
    const table = document.getElementById('contactTable').querySelector('tbody');
    const newRow = table.insertRow();

    // Cria células para o nome e telefone
    const nameCell = newRow.insertCell(0);
    const phoneCell = newRow.insertCell(1);

    // Adiciona o conteúdo às células
    nameCell.textContent = name;
    phoneCell.textContent = phone;

    // Limpa os campos do formulário
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
});
