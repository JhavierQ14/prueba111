// Elementos del DOM
const animation = document.getElementById("animation");
const additionalContent = document.getElementById("additional-content");
const gallery = document.getElementById("gallery");
const nextToGalleryButton = document.getElementById("nextToGallery");
const nextButton = document.getElementById("nextButton");
const finalMessage = document.getElementById("final-message");
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");

// Galería de imágenes
const galleryItems = document.querySelectorAll(".gallery-item");
let currentIndex = 0;

// Contador para el botón "Sí"
let yesButtonClickCount = 0;

// Mostrar el mensaje inicial
setTimeout(() => {
    animation.classList.add("hidden");
    additionalContent.classList.remove("hidden"); // Muestra el nuevo contenido
}, 5000); // 5 segundos para la animación inicial

// Botón para avanzar a la galería
nextToGalleryButton.addEventListener("click", () => {
    additionalContent.classList.add("hidden");
    gallery.classList.remove("hidden"); // Muestra la galería
});

// Función para mostrar la imagen actual
function showCurrentImage() {
    galleryItems.forEach((item) => {
        item.classList.add("hidden");
    });
    galleryItems[currentIndex].classList.remove("hidden");
    galleryItems[currentIndex].classList.add("active");
}

// Mostrar la primera imagen al cargar la galería
showCurrentImage();

// Botón para avanzar en la galería
nextButton.addEventListener("click", () => {
    // Aplicar animación a la imagen actual
    galleryItems[currentIndex].classList.add("flip-animation");

    // Esperar a que termine la animación antes de cambiar de imagen
    setTimeout(() => {
        galleryItems[currentIndex].classList.remove("active", "flip-animation");
        galleryItems[currentIndex].classList.add("hidden");

        // Avanzar al siguiente índice
        currentIndex++;

        // Si es la última imagen, mostrar el mensaje final
        if (currentIndex === galleryItems.length) {
            showFinalMessage(); // Muestra el mensaje final
        } else {
            showCurrentImage(); // Muestra la siguiente imagen
        }
    }, 800); // Duración de la animación (0.8 segundos)
});

// Mostrar el mensaje final
function showFinalMessage() {
    gallery.classList.add("hidden"); // Oculta la galería
    finalMessage.classList.remove("hidden"); // Muestra el mensaje final
}

// Lógica para el botón "Sí"
yesButton.addEventListener("click", () => {
    // Incrementar el contador de clics en el botón "Sí"
    yesButtonClickCount++;

    // Si es la primera vez que se hace clic en "Sí"
    if (yesButtonClickCount === 1) {
        // Ocultar el botón "Sí"
        yesButton.style.display = "none";
    } else if (yesButtonClickCount === 2) {
        // Si es la segunda vez que se hace clic en "Sí", mostrar el mensaje
        const responseMessage = document.createElement("div");
        responseMessage.id = "response-message";
        responseMessage.innerHTML = "Jajaja yo sé que no lo dudaste, Gracias por hacerme tan feliz";
        document.body.appendChild(responseMessage);

        // Estilos para el mensaje de respuesta
        responseMessage.style.position = "fixed";
        responseMessage.style.top = "50%";
        responseMessage.style.left = "50%";
        responseMessage.style.transform = "translate(-50%, -50%)";
        responseMessage.style.backgroundColor = "#e91e63";
        responseMessage.style.color = "white";
        responseMessage.style.padding = "20px";
        responseMessage.style.borderRadius = "10px";
        responseMessage.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
        responseMessage.style.zIndex = "1000";
        responseMessage.style.fontSize = "1.5rem";
        responseMessage.style.textAlign = "center";

        // Ocultar ambos botones ("Sí" y "No")
        yesButton.style.display = "none";
        noButton.style.display = "none";

        // Ocultar el mensaje después de 5 segundos
        setTimeout(() => {
            responseMessage.remove();
        }, 50000);
    }
});

// Lógica para el botón "No"
noButton.addEventListener("click", () => {
    // Mostrar un mensaje en la pantalla
    const responseMessage = document.createElement("div");
    responseMessage.id = "response-message";
    responseMessage.innerHTML = "En serio seleccionaste que no :(";
    document.body.appendChild(responseMessage);

    // Estilos para el mensaje de respuesta
    responseMessage.style.position = "fixed";
    responseMessage.style.top = "50%";
    responseMessage.style.left = "50%";
    responseMessage.style.transform = "translate(-50%, -50%)";
    responseMessage.style.backgroundColor = "#555";
    responseMessage.style.color = "white";
    responseMessage.style.padding = "20px";
    responseMessage.style.borderRadius = "10px";
    responseMessage.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
    responseMessage.style.zIndex = "1000";
    responseMessage.style.fontSize = "1.5rem";
    responseMessage.style.textAlign = "center";

    // Ocultar el mensaje después de 8 segundos
    setTimeout(() => {
        responseMessage.remove();

        // Volver a mostrar el mensaje final
        finalMessage.classList.remove("hidden");
        yesButton.style.display = "inline-block"; // Mostrar el botón "Sí" nuevamente
    }, 10000); // Duración del mensaje de "No" (8 segundos)
});