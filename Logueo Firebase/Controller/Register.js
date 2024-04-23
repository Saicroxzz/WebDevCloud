import { registerAuth, mensajeA } from "../Controller/firebase.js";

const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
const registerButton = document.getElementById('btnregister'); 

async function register() {
    const email = document.getElementById('edtuser').value; 
    const confirmEmail = document.getElementById('confirmEmail').value;         
    const password = document.getElementById('edtpassword').value; 
    const confirmPassword = document.getElementById('confirmPassword').value; 

    if (password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        return;
    } else if (!specialCharacters.test(password)) {
        alert('La contraseña debe contener al menos un caracter especial.');
        return;
    } else if (email !== confirmEmail) {
        alert('El usuario y la confirmación de usuario no coinciden.');
        return;
    } else if (password !== confirmPassword) {
        alert('La contraseña y la confirmación de contraseña no coinciden.');
        return;
    } else {
        try {
            const validation = await registerAuth(email, password);

            if (validation) {
                alert('Usuario registrado exitosamente.');
                
                try {
                    await mensajeA(); // Suponiendo que esta función envía un correo de verificación
                    console.log('Correo electrónico de verificación enviado con éxito');
                } catch (error) {
                    console.error('Error al enviar correo electrónico de verificación:', error);
                }
                
                window.location.href = "../index.html"; 
            } else {
                throw new Error('Error en el registro');
            }
        } catch (error) {
            const errorMessage = error.message;
            alert(errorMessage);
            console.error('Error de registro:', error);
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    registerButton.addEventListener('click', register);
});
