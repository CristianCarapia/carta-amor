const envelope = document.getElementById('envelope');
let isOpened = false
envelope.addEventListener('click', function () {
    if (!isOpened) {
        isOpened = true
        envelope.classList.add('opened')
        setTimeout(() => {
            envelope.classList.add('inflating')
        }, 500);
        setTimeout(() => {
            envelope.classList.add('shaking')
        }, 2300);
        
        setTimeout
            (() => {
                lanzarCorazones()
            }, 600)

        setTimeout(() => {
            romperSobre()
        }, 3000)
        setTimeout(() => {
            cartAmor.classList.add('visible')
        }, 4000);
        setTimeout(() => {
            resetButton.classList.add('visible')
        }, 5000);
    }
})

const heatsContainer = document.getElementById('heatsContainer')

function romperSobre() {
    const envelopeRect = envelope.getBoundingClientRect();
    const centerX = envelopeRect.left + envelopeRect.width / 2;
    const centerY = envelopeRect.top + envelopeRect.height / 2;
    const numFragmentos = 35;
    for (let i = 0; i < numFragmentos; i++) {
        const framento = document.createElement('div')
        framento.className = 'envelope-fragment';
        const width = 25 + Math.random() * 90;
        const height = 25 + Math.random() * 90;
        framento.style.width = width + 'px';
        framento.style.height = height + 'px';
        framento.style.left = centerX + 'px';
        framento.style.top = centerY + 'px'
        const randomClip = `polygon(
        ${Math.random() * 30}% ${Math.random() * 30}%,
        ${70 + Math.random() * 30}% ${Math.random() * 30}%,
        ${70 + Math.random() * 30}% ${70 + Math.random() * 30}%,
        ${Math.random() * 30}% ${70 + Math.random() * 30}%
        )`;
        framento.style.clipPath = randomClip
        if (Math.random() > 0.7) {
            framento.style.background = 'linear-gradient(135deg, #f48fb1 0%, #f06292 100%)';
        } else if (Math.random() > 0.5) {
            framento.style.background = 'linear-gradient(to bottom, #f8bbd0 0%, #f48fb1 100%)';
        }
        document.body.appendChild(framento)
        const angulo = (Math.PI * 2 * i) / numFragmentos + (Math.random() - 0.5) * 0.8;
        const velocidad = 400 + Math.random() * 700;
        const velocidadX = Math.cos(angulo) * velocidad;
        const velocidadY = Math.sin(angulo) * velocidad - 300;
        const rotacion = Math.random() * 1000 - 540;
        setTimeout(() => {
            framento.style.transition = 'all 2.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            framento.style.opacity = '1';
            framento.style.left = (centerX + velocidadX) + 'px';
            framento.style.top = (centerY + velocidadY) + 'px';
            framento.style.transform = `rotate(${rotacion}deg) scale(${0.5 + Math.random() * 0.8})`;
            setTimeout(() => {
                framento.style.transition = 'all 3.5s cubic-bezier(0.4, 0.0, 0.6, 1)';
                framento.style.top = (window.innerHeight + 200) + 'px';
                framento.style.opacity = '0';
                framento.style.transform = `rotate(${rotacion * 2}deg) scale(0.2)`;
                setTimeout(() => {
                    framento.remove()
                }, 3500)
            }, 2300)
        }, 50)
    }
    setTimeout(() => {
        envelope.classList.add('exploded')
    }, 100)
}

function lanzarCorazones() {
    const cantidadCorazones  = 550
    const emojisCorazones = ['❤️', '💕', '💖', '💗', '💓', '💝', '💘', '💞', '💟'];
    const envelopeRect = envelope.getBoundingClientRect();
    const puntoAperturaX = envelopeRect.left + envelopeRect.width / 3
    const puntoAperturaY = envelopeRect.top + 5;
    for (let i = 0; i < cantidadCorazones; i++) {
        setTimeout(() => {
            const corazon = document.createElement('div');
            corazon.className = 'heart'
            corazon.innerHTML = emojisCorazones[Math.floor(Math.random() * emojisCorazones.length)]
            const size = 80 + Math.random() * 150;
            corazon.style.fontSize = size + 'px';
            corazon.style.left = puntoAperturaX + 'px';
            corazon.style.top = puntoAperturaY + 'px';
            heatsContainer.appendChild(corazon);
            const anguloDispersion = (Math.random() - 0.5) * Math.PI * 1.4;
            const fuerzaHorizontal = Math.sin(anguloDispersion) * (150 + Math.random() * 700);
            const alturaMaxima = -(150 + Math.random() * 450)
            const finalX = Math.max(20, Math.min(window.innerWidth - 120, puntoAperturaX + fuerzaHorizontal))
            const finalY = Math.random() * (window.innerHeight - 80) + 40
            const rotacionFinal = Math.random() * 360;
            setTimeout(() => {
                corazon.style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                corazon.style.opacity = '1'
                corazon.style.left = (puntoAperturaX + fuerzaHorizontal * 0.5) + 'px'
                corazon.style.top = (puntoAperturaY + alturaMaxima) + 'px'
                corazon.style.transform = `rotate(${Math.random() * 180}deg)`;

                setTimeout(() => {
                    corazon.style.transition = 'all 2s cubic-bezier(0.4, 0.0, 0.6, 1)';
                    corazon.style.left = finalX + 'px';
                    corazon.style.top = finalY + 'px';
                    corazon.style.transform = `rotate(${rotacionFinal}deg)`;
                    setTimeout(() => {
                        corazon.style.transition = 'none'
                    }, 2000)
                }, 1100)
            }, 50)
        }, i * 15)
    }
}