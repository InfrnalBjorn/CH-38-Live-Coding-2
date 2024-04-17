// API
const API_ENDPOINT = 'https://yesno.wtf/api';

// 1. Crear una función fetchAnswer y llamar a la API
// Esta función se conecta a la API y recupera los datos.
async function fetchAnswer() {
    // Realizamos la petición a la API
    const response = await fetch(API_ENDPOINT);
    // Convertimos la respuesta en un objeto JSON
    const data = await response.json();
    // Devolvemos los datos
    return data;
}

// 2. Mostrar la respuesta de la API
// Esta función toma los datos de la API y los muestra en el HTML.
function displayAnswer(data) {
    // Obtenemos el div donde queremos mostrar la respuesta
    const answerDiv = document.getElementById('answer');
    // Cambiamos el contenido del div para que muestre la respuesta de la API
    answerDiv.textContent = data.answer;
}

// 3. Agregar la función fetchAnswer a un eventListener
// Esta parte del código se encarga de "escuchar" el clic en el botón y luego llama a las funciones anteriores.
document.getElementById('button').addEventListener('click', async () => {
    // Llamamos a la función fetchAnswer y esperamos a que se complete
    const data = await fetchAnswer();
    // Llamamos a la función displayAnswer para mostrar los datos en el HTML
    displayAnswer(data);

    // 4. Limpiar la salida después de 5 segundos
    // Esta parte del código se encarga de limpiar la respuesta y la pregunta después de 5 segundos.
    setTimeout(() => {
        // Limpiamos el contenido del div de la respuesta
        document.getElementById('answer').textContent = '';
        // Limpiamos el contenido del input de la pregunta
        document.getElementById('input').value = '';
    }, 5000);
});
