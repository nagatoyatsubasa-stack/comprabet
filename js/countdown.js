// Contagem Regressiva Infinita
(function() {
    'use strict';

    // Configuração: 10 minutos em segundos
    const COUNTDOWN_DURATION = 10 * 60;
    let timeLeft = COUNTDOWN_DURATION;
    let timerInterval = null;

    // Elementos DOM
    const countdownElement = document.getElementById('countdown');

    /**
     * Formata o tempo em MM:SS
     * @param {number} seconds - Segundos totais
     * @returns {string} Tempo formatado
     */
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `00:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    /**
     * Atualiza o display do contador
     */
    function updateDisplay() {
        if (countdownElement) {
            countdownElement.textContent = formatTime(timeLeft);
        }
    }

    /**
     * Decrementa o contador
     */
    function tick() {
        timeLeft--;

        // Se chegou a zero, reinicia
        if (timeLeft <= 0) {
            timeLeft = COUNTDOWN_DURATION;
        }

        updateDisplay();
    }

    /**
     * Inicia o contador
     */
    function startCountdown() {
        // Atualiza o display inicial
        updateDisplay();

        // Inicia o intervalo de 1 segundo
        timerInterval = setInterval(tick, 1000);
    }

    /**
     * Para o contador (útil para cleanup)
     */
    function stopCountdown() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }

    // Inicia quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startCountdown);
    } else {
        startCountdown();
    }

    // Cleanup quando a página for descarregada
    window.addEventListener('beforeunload', stopCountdown);

    // Expõe funções globalmente (opcional, para debug)
    window.CountdownTimer = {
        start: startCountdown,
        stop: stopCountdown,
        reset: function() {
            timeLeft = COUNTDOWN_DURATION;
            updateDisplay();
        }
    };
})();
