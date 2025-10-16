// Sistema de Navegação para Apresentação PLANTE
// Capítulo 5: Monitoramento, Avaliação e Revisão

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Adicionar números aos slides
    slides.forEach((slide, index) => {
        slide.setAttribute('data-slide', index);
    });

    // Função para mostrar slide específico
    function showSlide(index) {
        if (index < 0 || index >= slides.length) return;

        currentSlide = index;

        // Scroll suave até o slide
        slides[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        updateNavigation();
    }

    // Função para atualizar indicadores de navegação
    function updateNavigation() {
        const slideCounter = document.getElementById('slide-counter');
        if (slideCounter) {
            slideCounter.textContent = `${currentSlide + 1} / ${slides.length}`;
        }
    }

    // Navegação por teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === 'PageDown') {
            e.preventDefault();
            if (currentSlide < slides.length - 1) {
                showSlide(currentSlide + 1);
            }
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
            e.preventDefault();
            if (currentSlide > 0) {
                showSlide(currentSlide - 1);
            }
        } else if (e.key === 'Home') {
            e.preventDefault();
            showSlide(0);
        } else if (e.key === 'End') {
            e.preventDefault();
            showSlide(slides.length - 1);
        }
    });

    // Navegação por scroll (detecta qual slide está visível)
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            slides.forEach((slide, index) => {
                const rect = slide.getBoundingClientRect();
                if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                    currentSlide = index;
                    updateNavigation();
                }
            });
        }, 100);
    });

    // Criar controles de navegação
    createNavigationControls();

    function createNavigationControls() {
        const nav = document.createElement('div');
        nav.id = 'slide-navigation';
        nav.innerHTML = `
            <div style="position: fixed; bottom: 2rem; right: 2rem; z-index: 1000; display: flex; gap: 1rem; align-items: center; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); padding: 1rem 1.5rem; border-radius: 2rem; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);">
                <button id="prev-slide" class="nav-btn" title="Slide Anterior (← ou PageUp)" style="width: 40px; height: 40px; border-radius: 50%; border: none; background: linear-gradient(135deg, #00522E, #007542); color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; transition: transform 0.2s;">
                    ←
                </button>
                <span id="slide-counter" style="font-weight: 600; color: #1A202C; min-width: 60px; text-align: center;">1 / ${slides.length}</span>
                <button id="next-slide" class="nav-btn" title="Próximo Slide (→ ou PageDown)" style="width: 40px; height: 40px; border-radius: 50%; border: none; background: linear-gradient(135deg, #00522E, #007542); color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; transition: transform 0.2s;">
                    →
                </button>
            </div>
        `;
        document.body.appendChild(nav);

        // Event listeners para os botões
        document.getElementById('prev-slide').addEventListener('click', () => {
            if (currentSlide > 0) showSlide(currentSlide - 1);
        });

        document.getElementById('next-slide').addEventListener('click', () => {
            if (currentSlide < slides.length - 1) showSlide(currentSlide + 1);
        });

        // Hover effect nos botões
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
            });
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }

    // Indicador de progresso
    createProgressBar();

    function createProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.innerHTML = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 4px; background: rgba(0, 0, 0, 0.1); z-index: 9999;">
                <div id="progress-fill" style="height: 100%; width: 0%; background: linear-gradient(90deg, #00522E, #009B48, #FFC72C); transition: width 0.3s ease;"></div>
            </div>
        `;
        document.body.appendChild(progressBar);

        // Atualizar progresso
        function updateProgress() {
            const progress = ((currentSlide + 1) / slides.length) * 100;
            document.getElementById('progress-fill').style.width = `${progress}%`;
        }

        window.addEventListener('scroll', updateProgress);
        updateProgress();
    }

    console.log(`✅ Sistema de navegação inicializado - ${slides.length} slides carregados`);
});
