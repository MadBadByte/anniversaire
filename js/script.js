document.addEventListener('DOMContentLoaded', () => {
    // Éléments BEM
    const cakeImages = document.querySelectorAll('.cake__image');
    const blowEffect = document.querySelector('.cake__blow-effect');
    const button = document.querySelector('.button');
    const message = document.querySelector('.message');

    // Variables de jeu
    let currentFrame = 0;
    let clickCount = 0;
    const totalFrames = 4;

    // Configuration
    const config = {
        minClicks: 3,
        blowInterval: 800
    };

    // Gestion du clic sur le bouton
    button.addEventListener('click', () => {
        clickCount++;

        if (clickCount >= config.minClicks) {
            button.disabled = true;

            const interval = setInterval(() => {
                // Effet de souffle
                blowEffect.style.opacity = '1';
                setTimeout(() => {
                    blowEffect.style.opacity = '0';
                }, 300);

                // Masquer la frame actuelle
                cakeImages[currentFrame].style.opacity = '0';
                currentFrame++;

                // Afficher la frame suivante
                if (currentFrame < totalFrames) {
                    cakeImages[currentFrame].style.opacity = '1';
                }

                // Fin de l'animation
                if (currentFrame === totalFrames - 1) {
                    clearInterval(interval);
                    setTimeout(() => {
                        message.classList.add('message--visible');
                    }, 500);
                }
            }, config.blowInterval);
        }
    });
});