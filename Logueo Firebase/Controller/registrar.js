import { registerAuth } from "../Controller/firebase.js";

const save_auth = document.getElementById('registerBtn');

async function register(){  
    const email = document.getElementById('edtuser').value;
    const confirmEmail = document.getElementById('Confemail').value;
    const password = document.getElementById('edtpassword').value;
    const confirmPassword = document.getElementById('Confpassword').value;

    if(email !== confirmEmail){
      alert('Los valores de los correos no coinciden');
      return;
    }

    if(password !== confirmPassword){
      alert('Los valores de las contraseñas no coinciden');
      return;
    }

    if(password.length <8){
      alert('La contraseña debe ser minimo de 8 caracteres');
      return;
    }

    try{
      const validation = await registerAuth(email, password);

      if(validation != null){
          alert('¡Usuaro registrado exitosamente!');
          window.location.href = "/Templates/home.html";
      }
      else{
        throw new Error('El usuario no se pudo registrar');
      }
    }catch(error){
    alert(error.message);
    console.log('Error a la hora del registro:', error);
    }
}

window.addEventListener('DOMContentLoaded', async () => {
  save_auth.addEventListener('click', register);
});
