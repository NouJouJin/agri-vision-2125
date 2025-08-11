document.addEventListener('DOMContentLoaded', () => {
    // particles.js background animation
    particlesJS('particles-js', {
        "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#00f5d4" }, "shape": { "type": "circle" }, "opacity": { "value": 0.5, "random": true }, "size": { "value": 3, "random": true }, "line_linked": { "enable": true, "distance": 150, "color": "#00f5d4", "opacity": 0.2, "width": 1 }, "move": { "enable": true, "speed": 1, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false } },
        "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 } } },
        "retina_detect": true
    });

    // Count-up animation for stats
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });

    // Scroll fade-in animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Smooth scroll for application form buttons
    const formButtons = document.querySelectorAll('.form-button');
    formButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (button.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.querySelector(button.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});

// --- BGM Control ---
document.addEventListener('DOMContentLoaded', () => {
    const bgmPlayer = document.getElementById('bgm-player');
    const bgmButton = document.getElementById('bgm-button');
    let isPlaying = false;

    // ユーザーの最初の操作で再生を開始する関数
    function startMusic() {
        if (!isPlaying) {
            bgmPlayer.volume = 0.2; // 初期の音量を小さめに設定
            bgmPlayer.play().then(() => {
                isPlaying = true;
                bgmButton.textContent = '🔊';
                // 一度再生を開始したら、このイベントリスナーは不要なので削除
                document.body.removeEventListener('click', startMusic);
                document.body.removeEventListener('scroll', startMusic);
            }).catch(error => {
                console.log("Autoplay was prevented. Waiting for user interaction.");
            });
        }
    }
    
    // 多くのブラウザでは自動再生がブロックされるため、ユーザーがクリックかスクロールしたら再生を開始
    document.body.addEventListener('click', startMusic);
    document.body.addEventListener('scroll', startMusic, { once: true });


    // ボタンで再生/停止を切り替え
    bgmButton.addEventListener('click', (e) => {
        e.stopPropagation(); // ページの他の部分へのクリックイベント伝播を停止
        if (isPlaying) {
            bgmPlayer.pause();
            bgmButton.textContent = '🔇';
        } else {
            bgmPlayer.play();
            bgmButton.textContent = '🔊';
        }
        isPlaying = !isPlaying;
    });
});
