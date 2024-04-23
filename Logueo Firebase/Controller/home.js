import { see, logout, Deletuser } from "../Controller/firebase.js";

see(); // Asumiendo que esta función es para comprobar el estado de la sesión

const logoutButton = document.getElementById('logoutBtn');
const deleteAccountButton = document.getElementById('deleteAccountBtn'); // Asume que este es el id del botón de eliminar cuenta

async function closeSession() {
    try {
        await logout(); // Espera a que la función logout se complete
        alert('Sesión Cerrada');
        window.location.href = "../Index.html"; // Redirecciona a la página de inicio
    } catch (error) {
        alert('Sesión no Cerrada');
    }
}

async function deleteAccount() {
    try {
        await Deletuser(); // Espera a que la función Deletuser se complete
        alert('Usuario eliminado');

        setTimeout(() => {
            window.location.href = "../Index.html"; // Redirecciona a la página de inicio tras 2 segundos
        }, 2000);
    } catch (error) {
        alert('Usuario no eliminado');
    }
}

// Asegurándose de que el DOM está completamente cargado antes de agregar los manejadores de eventos
window.addEventListener('DOMContentLoaded', () => {
    logoutButton.addEventListener('click', closeSession); // Agrega el evento click al botón de cerrar sesión
    deleteAccountButton.addEventListener('click', deleteAccount); // Agrega el evento click al botón de eliminar cuenta
});
