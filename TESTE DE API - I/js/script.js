function buscarUsuario() {
      const userId = document.getElementById('userId').value;
      const resultadoDiv = document.getElementById('resultado');

      if (!userId || userId <= 0) {
        resultadoDiv.textContent = "Por favor, insira um ID válido.";
        return;
      }

      resultadoDiv.textContent = "Carregando...";

      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error("Usuário não encontrado.");
          }
          return response.json();
        })
        .then(usuario => {
          resultadoDiv.innerHTML = `
            <strong>ID:</strong> ${usuario.id}<br>
            <strong>Nome:</strong> ${usuario.name}<br>
            <strong>Email:</strong> ${usuario.email}<br>
            <strong>Cidade:</strong> ${usuario.address.city}<br>
            <strong>Empresa:</strong> ${usuario.company.name}
          `;
        })
        .catch(error => {
          resultadoDiv.textContent = error.message;
        });
    }