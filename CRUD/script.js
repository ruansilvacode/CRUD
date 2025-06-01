const form = document.getElementById('form');
const tabela = document.getElementById('tabela-clientes');

function carregarClientes() {
  fetch('listar.php')
    .then(response => response.json())
    .then(dados => {
      tabela.innerHTML = '';
      dados.forEach(cliente => {
        tabela.innerHTML += `
          <tr>
            <td>${cliente.nome}</td>
            <td>${cliente.email}</td>
            <td>${cliente.telefone}</td>
            <td>
              <button onclick="removerCliente(${cliente.id})">Remover</button>
            </td>
          </tr>
        `;
      });
    });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('nome', document.getElementById('nome').value);
  formData.append('email', document.getElementById('email').value);
  formData.append('telefone', document.getElementById('telefone').value);

  fetch('inserir.php', {
    method: 'POST',
    body: formData
  }).then(() => {
    form.reset();
    carregarClientes();
  });
});

function removerCliente(id) {
  const formData = new FormData();
  formData.append('id', id);

  fetch('deletar.php', {
    method: 'POST',
    body: formData
  }).then(() => {
    carregarClientes();
  });
}

// Carregar clientes ao abrir a página
carregarClientes();
