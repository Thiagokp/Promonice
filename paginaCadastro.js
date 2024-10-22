//exibir e ocultar a senha
function showPassword () {
    const eye=document.getElementById('eye');
    const eyeSlash=document.getElementById('eye-slash');
    const fieldPassword=document.getElementById('loginSenha');

if(eye.style.display ==='none') {
    eye.style.display = 'block';
    eyeSlash.style.display = 'none';
    fieldPassword.type = 'text';
} else {
    eye.style.display = 'none';
    eyeSlash.style.display = 'block';
    fieldPassword.type = 'password';

}
}

 //alternar para a tela de cadastro
 function mostrarCadastro() {
    const loginForm = document.getElementById('login');
    const cadastroForm = document.getElementById('cadastro');

    loginForm.style.display = 'none';
    cadastroForm.style.display = 'flex';
}

   
//alternar para a tela de login
function mostrarLogin() {
    document.getElementById('cadastro').style.display = 'none';
    document.getElementById('login').style.display = 'flex';
  }

  // Validar login teste
function validarLogin() {
    const email = document.getElementById('loginEmail').value;
    const senha = document.getElementById('loginSenha').value;
    const errorMessage = document.getElementById('loginErrorMessage');
 
   
    if (email === "" || senha === "") {
      //errorMessage.textContent = "Por favor, preencha todos os campos.";
      return false;
    }
 
    errorMessage.textContent = "";
    //login teste
    alert("Login bem-sucedido!");
    return true;
  }
 
  // Validação cadastro teste
  function validarCadastro() {
    const nome = document.getElementById('cadastroNome').value;
    const email = document.getElementById('cadastroEmail').value;
    const senha = document.getElementById('cadastroSenha').value;
    const confirmarSenha = document.getElementById('confirmarCadastroSenha').value;
    const errorMessage = document.getElementById('cadastroErrorMessage');
    const senhaErrorMessage = document.getElementById('senhaErrorMessage')
    // Verificar se os campos estão preenchidos
    if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
      errorMessage.textContent = "Todos os campos devem ser preenchidos.";
      return false;
    }
 
     //conferir se a senha tem 8 caracteres
    if (senha.length < 8) {
        senhaErrorMessage.textContent = "A senha deve ter pelo menos 8 caracteres.";
    } else {
      senhaErrorMessage.textContent = "";
    }

    // Verificar se as senhas coincidem
    if (senha !== confirmarSenha) {
      errorMessage.textContent = "As senhas não coincidem!";
      return false;
    } else {
      errorMessage.textContent = "";
    }
   
    if (senha.length > 7) {
      errorMessage.textContent = "";
      // teste cadastro
    alert("Cadastro bem-sucedido!");
    return true;
    }
  }