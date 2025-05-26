// Define uma classe chamada ValidaFormulario, usada para validar formulários HTML
class ValidaFormulario {

  // Método construtor da classe, chamado automaticamente ao instanciar a classe
  constructor() {
    // Seleciona o formulário com a classe CSS "formulario" e armazena na propriedade do objeto
    this.formulario = document.querySelector('.formulario');
    // Chama o método que configura os eventos do formulário
    this.eventos();
  }

  // Define os eventos que serão escutados no formulário
  eventos() {
    // Escuta o evento "submit" do formulário
    this.formulario.addEventListener('submit', e => {
      // Quando o formulário for enviado, chama handleSubmit passando o evento como argumento
      this.handleSubmit(e);
    });
  }

  // Manipula o evento de envio do formulário
  handleSubmit(e) {
    // Impede que o formulário seja enviado normalmente (página não é recarregada)
    e.preventDefault();
    // Verifica se os campos são válidos
    const camposValidos = this.camposSaoValidos();
    // Verifica se as senhas são válidas
    const senhasValidas = this.senhasSaoValidas();

    // Se tudo for válido, mostra um alerta e envia o formulário
    if (camposValidos && senhasValidas) {
      alert('Formulário enviado.');
      this.formulario.submit(); // Envia o formulário manualmente
    }
  }

  // Verifica se as senhas são válidas (iguais e com comprimento adequado)
  senhasSaoValidas() {
    let valid = true;

    // Seleciona os campos de senha e repetir senha
    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha');

    // Verifica se os valores dos campos são diferentes
    if (senha.value !== repetirSenha.value) {
      valid = false;
      // Exibe mensagens de erro nos dois campos
      this.criaErro(senha, 'Campos senha e repetir senha precisar ser iguais.');
      this.criaErro(repetirSenha, 'Campos senha e repetir senha precisar ser iguais.');
    }

    // Verifica o comprimento da senha (entre 6 e 12 caracteres)
    if (senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
    }

    return valid;
  }

  // Verifica se todos os campos obrigatórios estão preenchidos e se são válidos
  camposSaoValidos() {
    let valid = true;

    // Remove mensagens de erro anteriores
    for (let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    // Para cada campo com a classe "validar"
    for (let campo of this.formulario.querySelectorAll('.validar')) {
      // Captura o texto do label anterior ao campo
      const label = campo.previousElementSibling.innerText;

      // Se o campo estiver vazio
      if (!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      // Se o campo tiver a classe "cpf", chama a validação de CPF
      if (campo.classList.contains('cpf')) {
        if (!this.validaCPF(campo)) valid = false;
      }

      // Se o campo tiver a classe "usuario", chama a validação de usuário
      if (campo.classList.contains('usuario')) {
        if (!this.validaUsuario(campo)) valid = false;
      }
    }

    return valid;
  }

  // Valida o campo de usuário (tamanho e caracteres permitidos)
  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;

    // Verifica o comprimento do nome de usuário
    if (usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
      valid = false;
    }

    // Verifica se o nome contém apenas letras e/ou números
    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
      valid = false;
    }

    return valid;
  }

  // Valida o CPF usando uma classe externa chamada ValidaCPF
  validaCPF(campo) {
    // Cria uma instância da classe ValidaCPF com o valor do campo
    const cpf = new ValidaCPF(campo.value);

    // Se o método valida() retornar falso, o CPF é inválido
    if (!cpf.valida()) {
      this.criaErro(campo, 'CPF inválido.');
      return false;
    }

    return true;
  }

  // Cria uma mensagem de erro e insere logo após o campo inválido
  criaErro(campo, msg) {
    const div = document.createElement('div'); // Cria uma nova div
    div.innerHTML = msg; // Define o conteúdo da div como a mensagem
    div.classList.add('error-text'); // Adiciona a classe CSS "error-text"
    campo.insertAdjacentElement('afterend', div); // Insere a div após o campo
  }
}

// Instancia a classe ValidaFormulario para que comece a funcionar
const valida = new ValidaFormulario();
